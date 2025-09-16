import EditableContent from "@/components/EditableContent";
import EditableImage from "@/components/EditableImage";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <EditableContent tag="h1" className="text-5xl font-bold mb-6 leading-tight">
                Secure Your Website with Professional Protection
              </EditableContent>
              <EditableContent tag="p" className="text-xl mb-8 opacity-90">
                Advanced security solutions for modern websites. Protect your business from cyber threats with our comprehensive security suite.
              </EditableContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="start-trial-button">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" data-testid="learn-more-button">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <EditableImage
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cybersecurity dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableContent tag="h2" className="text-4xl font-bold text-foreground mb-4">
              Why Choose SiteSecure Pro?
            </EditableContent>
            <EditableContent tag="p" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive security platform provides everything you need to protect your website and your users.
            </EditableContent>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card p-8 rounded-xl text-center" data-testid="feature-firewall">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <EditableContent tag="h3" className="text-xl font-semibold mb-4">Advanced Firewall</EditableContent>
              <EditableContent tag="p" className="text-muted-foreground">Protect against malicious attacks with our intelligent firewall system that adapts to new threats.</EditableContent>
            </div>
            <div className="feature-card p-8 rounded-xl text-center" data-testid="feature-ssl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lock text-2xl text-primary"></i>
              </div>
              <EditableContent tag="h3" className="text-xl font-semibold mb-4">SSL Encryption</EditableContent>
              <EditableContent tag="p" className="text-muted-foreground">End-to-end encryption for all data transmission with automatic certificate management.</EditableContent>
            </div>
            <div className="feature-card p-8 rounded-xl text-center" data-testid="feature-monitoring">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-2xl text-primary"></i>
              </div>
              <EditableContent tag="h3" className="text-xl font-semibold mb-4">Real-time Monitoring</EditableContent>
              <EditableContent tag="p" className="text-muted-foreground">24/7 monitoring with instant alerts for suspicious activities and security incidents.</EditableContent>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-uptime">
              <EditableContent tag="div" className="text-4xl font-bold text-primary mb-2">99.9%</EditableContent>
              <EditableContent tag="div" className="text-muted-foreground">Uptime Guarantee</EditableContent>
            </div>
            <div data-testid="stat-websites">
              <EditableContent tag="div" className="text-4xl font-bold text-primary mb-2">50K+</EditableContent>
              <EditableContent tag="div" className="text-muted-foreground">Protected Websites</EditableContent>
            </div>
            <div data-testid="stat-threats">
              <EditableContent tag="div" className="text-4xl font-bold text-primary mb-2">1M+</EditableContent>
              <EditableContent tag="div" className="text-muted-foreground">Threats Blocked</EditableContent>
            </div>
            <div data-testid="stat-support">
              <EditableContent tag="div" className="text-4xl font-bold text-primary mb-2">24/7</EditableContent>
              <EditableContent tag="div" className="text-muted-foreground">Expert Support</EditableContent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
