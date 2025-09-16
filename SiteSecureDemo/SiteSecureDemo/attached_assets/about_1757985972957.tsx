import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Leaf, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">About SiteSecure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
            Dedicated to creating sustainable change through community-driven initiatives and collaborative partnerships.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower communities worldwide by providing sustainable solutions that address fundamental needs in education, healthcare, and infrastructure while fostering local capacity building and long-term self-sufficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every community has access to the resources and opportunities needed to thrive, creating a more equitable and sustainable future for all through collaborative action and innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Dr. Maria Santos" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                data-testid="img-team-maria"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Dr. Maria Santos</h3>
              <p className="text-muted-foreground mb-2">Executive Director</p>
              <p className="text-sm text-muted-foreground">Leading our global initiatives with 15+ years of international development experience.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="James Mitchell" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                data-testid="img-team-james"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">James Mitchell</h3>
              <p className="text-muted-foreground mb-2">Programs Director</p>
              <p className="text-sm text-muted-foreground">Overseeing project implementation and community partnerships across multiple regions.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Aisha Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                data-testid="img-team-aisha"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Aisha Patel</h3>
              <p className="text-muted-foreground mb-2">Operations Manager</p>
              <p className="text-sm text-muted-foreground">Ensuring efficient operations and sustainable impact measurement across all programs.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-muted">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Working together with communities and partners</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">Creating lasting, environmentally conscious solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">Leading with empathy and understanding</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Developing creative approaches to complex challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
