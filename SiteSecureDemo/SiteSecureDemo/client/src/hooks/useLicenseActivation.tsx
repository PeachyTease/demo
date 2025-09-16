import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function useLicenseActivation() {
  const [isActivating, setIsActivating] = useState(false);
  const { toast } = useToast();

  const activateLicense = async (licenseKey: string) => {
    setIsActivating(true);
    
    try {
      const response = await apiRequest("POST", "/api/activate-license", {
        licenseKey
      });
      
      const data = await response.json();
      
      if (data.downloadReady) {
        toast({
          title: "License Activated!",
          description: "Starting download of full version...",
        });
        
        // Trigger download
        const downloadResponse = await apiRequest("POST", "/api/download-full-version", {
          licenseKey
        });
        
        // Create download link
        const blob = await downloadResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'sitesecure-pro-full.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Download Started",
          description: "Your full version is being downloaded!",
        });
      }
    } catch (error: any) {
      toast({
        title: "Activation Failed",
        description: error.message || "Invalid license key or activation error",
        variant: "destructive",
      });
    } finally {
      setIsActivating(false);
    }
  };

  return {
    activateLicense,
    isActivating
  };
}
