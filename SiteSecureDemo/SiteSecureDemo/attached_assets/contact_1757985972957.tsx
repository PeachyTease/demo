import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
    subscribeUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        inquiryType: "",
        message: "",
        subscribeUpdates: false,
      });

    } catch (error: any) {
      toast({
        title: "Failed to Send Message",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Have questions about our work? Want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start" data-testid="contact-address">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Global Impact Street<br />
                    International District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start" data-testid="contact-phone">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    General: +1 (555) 123-4567<br />
                    Emergency: +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start" data-testid="contact-email">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    General: info@sitesecure.org<br />
                    Donations: donate@sitesecure.org<br />
                    Press: media@sitesecure.org
                  </p>
                </div>
              </div>

              <div className="flex items-start" data-testid="contact-hours">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-foreground mb-4">Follow Our Work</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-card text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border" data-testid="link-facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-card text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border" data-testid="link-twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-card text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border" data-testid="link-instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-card text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border" data-testid="link-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)} required>
                    <SelectTrigger data-testid="select-inquiry-type">
                      <SelectValue placeholder="Select Inquiry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="donation">Donation Questions</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    required
                    className="resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="subscribeUpdates"
                    checked={formData.subscribeUpdates}
                    onCheckedChange={(checked) => handleInputChange("subscribeUpdates", checked)}
                    data-testid="checkbox-subscribe-updates"
                  />
                  <Label htmlFor="subscribeUpdates" className="text-sm">
                    I would like to receive updates about SiteSecure's work and impact.
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Regional Offices */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Regional Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg text-center" data-testid="card-office-europe">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Europe Office</h3>
                <p className="text-muted-foreground mb-3">
                  45 Global Street<br />
                  London, UK SW1A 1AA<br />
                  +44 20 7123 4567
                </p>
                <div className="text-sm text-muted-foreground">Serving 25+ countries</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center" data-testid="card-office-asia">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Asia-Pacific Office</h3>
                <p className="text-muted-foreground mb-3">
                  789 Impact Avenue<br />
                  Singapore 018956<br />
                  +65 6123 4567
                </p>
                <div className="text-sm text-muted-foreground">Serving 15+ countries</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center" data-testid="card-office-africa">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Africa Office</h3>
                <p className="text-muted-foreground mb-3">
                  321 Hope Boulevard<br />
                  Nairobi, Kenya 00100<br />
                  +254 20 123 4567
                </p>
                <div className="text-sm text-muted-foreground">Serving 30+ countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
