import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import PayPalButton from "@/components/PayPalButton";
import StripeCheckout from "@/components/StripeCheckout";
import GCashPayment from "@/components/GCashPayment";
import { Heart, DollarSign, Droplets, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { toast } = useToast();

  const presetAmounts = ["25", "50", "100", "250"];

  const getFinalAmount = () => {
    return customAmount || amount;
  };

  const handleAmountSelect = (selectedAmount: string) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  const handleDonorInfoChange = (field: string, value: string) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!getFinalAmount() || parseFloat(getFinalAmount()) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return false;
    }

    if (!isAnonymous && (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required donor information.",
        variant: "destructive",
      });
      return false;
    }

    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const renderPaymentForm = () => {
    // Only render payment form if basic requirements are met (no validation toasts during render)
    const finalAmount = getFinalAmount();
    const hasValidAmount = finalAmount && parseFloat(finalAmount) > 0;
    const hasRequiredInfo = isAnonymous || (donorInfo.firstName && donorInfo.lastName && donorInfo.email);
    
    if (!hasValidAmount || !hasRequiredInfo || !termsAccepted) {
      return null;
    }

    switch (paymentMethod) {
      case "paypal":
        return (
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">PayPal Payment</h4>
            <PayPalButton 
              amount={finalAmount}
              currency="USD"
              intent="capture"
            />
          </div>
        );
      
      case "stripe":
        return (
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Credit Card Payment</h4>
            <StripeCheckout 
              amount={parseFloat(finalAmount)}
              donorInfo={donorInfo}
              donationType={donationType}
              isAnonymous={isAnonymous}
            />
          </div>
        );
      
      case "gcash":
        return (
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">GCash Payment</h4>
            <GCashPayment 
              amount={parseFloat(finalAmount)}
              donorInfo={donorInfo}
              donationType={donationType}
              isAnonymous={isAnonymous}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-donate-title">Make a Donation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-donate-description">
            Your support enables us to continue our vital work in communities around the world. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Donation Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Donation Amount</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {presetAmounts.map((presetAmount) => (
                    <Button
                      key={presetAmount}
                      type="button"
                      variant={amount === presetAmount && !customAmount ? "default" : "outline"}
                      onClick={() => handleAmountSelect(presetAmount)}
                      className="h-20 flex flex-col"
                      data-testid={`button-amount-${presetAmount}`}
                    >
                      <span className="text-2xl font-bold">${presetAmount}</span>
                      <span className="text-sm">USD</span>
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-foreground">$</span>
                  <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="flex-1"
                    data-testid="input-custom-amount"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Donation Type</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-Time Donation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly Giving</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Donor Information */}
              {!isAnonymous && (
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Donor Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={donorInfo.firstName}
                        onChange={(e) => handleDonorInfoChange("firstName", e.target.value)}
                        required
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={donorInfo.lastName}
                        onChange={(e) => handleDonorInfoChange("lastName", e.target.value)}
                        required
                        data-testid="input-last-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => handleDonorInfoChange("email", e.target.value)}
                        required
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={donorInfo.phone}
                        onChange={(e) => handleDonorInfoChange("phone", e.target.value)}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Label className="cursor-pointer">
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        paymentMethod === "paypal" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
                      }`}>
                        <RadioGroupItem value="paypal" className="sr-only" />
                        <DollarSign className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">PayPal</div>
                        <div className="text-sm opacity-90">Secure & Trusted</div>
                      </div>
                    </Label>

                    <Label className="cursor-pointer">
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        paymentMethod === "stripe" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
                      }`}>
                        <RadioGroupItem value="stripe" className="sr-only" />
                        <Heart className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">Credit Card</div>
                        <div className="text-sm opacity-90">Powered by Stripe</div>
                      </div>
                    </Label>

                    <Label className="cursor-pointer">
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        paymentMethod === "gcash" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
                      }`}>
                        <RadioGroupItem value="gcash" className="sr-only" />
                        <Stethoscope className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">GCash</div>
                        <div className="text-sm opacity-90">Philippines Mobile Payment</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Anonymous Donation Option */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                  data-testid="checkbox-anonymous"
                />
                <Label htmlFor="anonymous">Make this donation anonymous</Label>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  required
                  data-testid="checkbox-terms"
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy. I understand that this donation is final and non-refundable.
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Payment Processing */}
          <div className="space-y-6">
            {renderPaymentForm()}

            {/* Impact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">$25</div>
                      <div className="text-sm text-muted-foreground">Provides school supplies for one child for a month</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">$50</div>
                      <div className="text-sm text-muted-foreground">Supplies clean water for a family for 3 months</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">$100</div>
                      <div className="text-sm text-muted-foreground">Funds medical care for 10 community members</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
