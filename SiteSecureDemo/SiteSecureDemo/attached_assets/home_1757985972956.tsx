import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Making a Difference<br />
              <span className="text-accent">Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
              Join our mission to create positive change in communities worldwide through sustainable initiatives and collaborative action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-donate-now">
                  Donate Now
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-learn-more">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-impact-title">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-lives">50,000+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2" data-testid="text-stat-projects">1,200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-funds">$2.5M+</div>
              <div className="text-muted-foreground">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-countries">95+</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-initiatives-title">Featured Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden" data-testid="card-education">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Education initiative" 
                className="w-full h-48 object-cover"
                data-testid="img-education"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Education Access</h3>
                <p className="text-muted-foreground mb-4">Providing quality education resources to underserved communities worldwide.</p>
                <Link href="/work" className="text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden" data-testid="card-water">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Clean water initiative" 
                className="w-full h-48 object-cover"
                data-testid="img-water"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Clean Water</h3>
                <p className="text-muted-foreground mb-4">Building sustainable water infrastructure for communities in need.</p>
                <Link href="/work" className="text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden" data-testid="card-healthcare">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Healthcare initiative" 
                className="w-full h-48 object-cover"
                data-testid="img-healthcare"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Access</h3>
                <p className="text-muted-foreground mb-4">Delivering essential medical services to remote and rural areas.</p>
                <Link href="/work" className="text-primary hover:text-primary/80 font-medium">
                  Learn More <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-muted-foreground">Advanced protection for your digital assets and user data.</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-muted-foreground">Lightning-fast loading times and optimized experiences.</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">Comprehensive tools for managing users and permissions.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
