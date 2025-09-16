import EditableContent from "@/components/EditableContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Mode",
      description: "This is a demo - form submission would be implemented in the full version",
    });
  };

  return (
    <div data-testid="contact-page">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <EditableContent tag="h1" className="text-5xl font-bold mb-6">Get in Touch</EditableContent>
              <EditableContent tag="p" className="text-xl mb-8 text-muted-foreground">
                Have questions about our security solutions? Our team is here to help you secure your website.
              </EditableContent>
              <div className="space-y-6">
                <div className="flex items-center" data-testid="contact-email">
                  <i className="fas fa-envelope text-primary mr-4 text-xl"></i>
                  <div>
                    <EditableContent tag="h3" className="font-semibold">Email</EditableContent>
                    <EditableContent tag="p" className="text-muted-foreground">support@sitesecurepro.com</EditableContent>
                  </div>
                </div>
                <div className="flex items-center" data-testid="contact-phone">
                  <i className="fas fa-phone text-primary mr-4 text-xl"></i>
                  <div>
                    <EditableContent tag="h3" className="font-semibold">Phone</EditableContent>
                    <EditableContent tag="p" className="text-muted-foreground">+1 (555) 123-4567</EditableContent>
                  </div>
                </div>
                <div className="flex items-center" data-testid="contact-hours">
                  <i className="fas fa-clock text-primary mr-4 text-xl"></i>
                  <div>
                    <EditableContent tag="h3" className="font-semibold">Support Hours</EditableContent>
                    <EditableContent tag="p" className="text-muted-foreground">24/7 - Always Available</EditableContent>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <EditableContent tag="h2" className="text-2xl font-bold mb-6">Send us a Message</EditableContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your name" 
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell us how we can help..."
                    data-testid="contact-message-input"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="send-message-button"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
