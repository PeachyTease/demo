import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import DemoBadge from "@/components/DemoBadge";
import LicenseModal from "@/components/LicenseModal";
import PaymentModal from "@/components/PaymentModal";
import useLicenseActivation from "@/hooks/useLicenseActivation";
import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/features";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { activateLicense, isActivating } = useLicenseActivation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'g') {
        setShowLicenseModal(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Demo restrictions notification
    setTimeout(() => {
      console.log('🚀 SiteSecure Pro Demo Mode');
      console.log('📝 This is a demonstration version with limited functionality');
      console.log('🔑 Press Shift+G to access license activation');
      console.log('💰 Full version includes complete source code and functionality');
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <DemoBadge />
          <Navigation />
          <Router />
          
          <LicenseModal
            isOpen={showLicenseModal}
            onClose={() => setShowLicenseModal(false)}
            onPurchaseClick={() => {
              setShowLicenseModal(false);
              setShowPaymentModal(true);
            }}
            onActivate={activateLicense}
            isActivating={isActivating}
          />
          
          <PaymentModal
            isOpen={showPaymentModal}
            onClose={() => setShowPaymentModal(false)}
            onSuccess={(licenseKey: string) => {
              setShowPaymentModal(false);
              setShowLicenseModal(true);
              // Could auto-fill license key here
            }}
          />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
