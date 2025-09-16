import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseClick: () => void;
  onActivate: (licenseKey: string) => Promise<void>;
  isActivating: boolean;
}

export default function LicenseModal({
  isOpen,
  onClose,
  onPurchaseClick,
  onActivate,
  isActivating
}: LicenseModalProps) {
  const [licenseKey, setLicenseKey] = useState("");

  const handleActivate = async () => {
    if (licenseKey.trim()) {
      await onActivate(licenseKey.trim());
      setLicenseKey("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" data-testid="license-modal">
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-key text-2xl text-primary"></i>
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">Activate License</DialogTitle>
            <p className="text-muted-foreground">Enter your license key to download the full version</p>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="license-key" className="text-sm font-medium">License Key</Label>
            <Input
              id="license-key"
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="mt-2"
              data-testid="license-key-input"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">🎉 Full Version Includes:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Complete source code</li>
              <li>• Full functionality (no demo restrictions)</li>
              <li>• Commercial license</li>
              <li>• 1 year of updates</li>
              <li>• Priority support</li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1" data-testid="cancel-license-button">
              Cancel
            </Button>
            <Button 
              onClick={handleActivate} 
              className="flex-1" 
              disabled={!licenseKey.trim() || isActivating}
              data-testid="activate-license-button"
            >
              {isActivating ? "Activating..." : "Activate"}
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">Need a license key?</p>
          <Button 
            variant="link" 
            onClick={onPurchaseClick}
            className="text-primary hover:underline text-sm font-medium p-0"
            data-testid="purchase-license-button"
          >
            Purchase Now - $99
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
