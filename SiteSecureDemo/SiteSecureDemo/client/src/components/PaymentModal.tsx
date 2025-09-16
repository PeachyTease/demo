import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (licenseKey: string) => void;
}

const PaymentForm = ({ onSuccess, onClose }: { onSuccess: (licenseKey: string) => void; onClose: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        // Confirm payment on backend and get license key
        const response = await apiRequest("POST", "/api/confirm-payment", {
          paymentIntentId: paymentIntent.id
        });
        const data = await response.json();
        
        toast({
          title: "Payment Successful",
          description: "Your license key has been generated!",
        });
        
        onSuccess(data.licenseKey);
      } catch (error) {
        toast({
          title: "Error",
          description: "Payment successful but failed to generate license key",
          variant: "destructive",
        });
      }
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1" data-testid="cancel-payment-button">
          Cancel
        </Button>
        <Button 
          type="submit" 
          className="flex-1" 
          disabled={!stripe || isProcessing}
          data-testid="complete-payment-button"
        >
          {isProcessing ? "Processing..." : "Pay $99"}
        </Button>
      </div>
    </form>
  );
};

export default function PaymentModal({ isOpen, onClose, onSuccess }: PaymentModalProps) {
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await apiRequest("POST", "/api/create-payment-intent", { email });
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setShowPaymentForm(true);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  const handleClose = () => {
    setEmail("");
    setClientSecret("");
    setShowPaymentForm(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" data-testid="payment-modal">
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-credit-card text-2xl text-primary"></i>
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">Purchase License</DialogTitle>
            <p className="text-muted-foreground">Complete your purchase to get your license key</p>
          </div>
        </DialogHeader>
        
        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <span className="font-semibold">SiteSecure Pro License</span>
            <span className="text-xl font-bold">$99</span>
          </div>
        </div>
        
        {!showPaymentForm ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="mt-2"
                data-testid="email-input"
              />
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1" data-testid="cancel-email-button">
                Cancel
              </Button>
              <Button type="submit" className="flex-1" data-testid="continue-payment-button">
                Continue
              </Button>
            </div>
          </form>
        ) : (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm onSuccess={onSuccess} onClose={handleClose} />
          </Elements>
        )}
      </DialogContent>
    </Dialog>
  );
}
