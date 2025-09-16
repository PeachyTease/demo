import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Stories() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-stories-title">Impact Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stories-description">
            Real stories from the communities we serve, showcasing the transformative power of collaborative action.
          </p>
        </div>

        {/* Featured Story */}
        <Card className="shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 lg:order-1 p-8">
              <Badge className="bg-primary text-primary-foreground mb-4">Featured Story</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">From Darkness to Light</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When we first arrived in the village of Namanga, children were studying by candlelight after sunset. Today, thanks to our solar initiative and the incredible dedication of the community, the school glows with sustainable energy, and students are excelling in their studies like never before.
              </p>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Grace Wanjiku" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  data-testid="img-testimonial-grace"
                />
                <div>
                  <div className="font-semibold text-foreground">Grace Wanjiku</div>
                  <div className="text-sm text-muted-foreground">Head Teacher, Namanga Primary School</div>
                </div>
              </div>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "The transformation has been incredible. Our students now have access to computers, and evening study sessions are possible. Test scores have improved by 40% since the solar installation."
              </blockquote>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Solar school project" 
                className="w-full h-full object-cover lg:min-h-96"
                data-testid="img-solar-school"
              />
            </div>
          </div>
        </Card>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story 1 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-entrepreneur">
            <img 
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Entrepreneurship story" 
              className="w-full h-48 object-cover"
              data-testid="img-entrepreneur"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Empowering Entrepreneurs</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Maria started with a $50 microloan. Today, she employs 8 people in her thriving textile business and has become a community leader advocating for women's economic empowerment.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Lima, Peru • 2023</div>
              </div>
            </CardContent>
          </Card>

          {/* Story 2 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-water">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Clean water story" 
              className="w-full h-48 object-cover"
              data-testid="img-clean-water"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Clean Water, Bright Future</h3>
              <p className="text-muted-foreground text-sm mb-4">
                After years of walking 3 hours daily for water, the village of Kigoma now has three functioning wells. Children attend school regularly, and waterborne diseases have dropped by 90%.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Tanzania • 2024</div>
              </div>
            </CardContent>
          </Card>

          {/* Story 3 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-education">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Education success story" 
              className="w-full h-48 object-cover"
              data-testid="img-digital-dreams"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Digital Dreams Realized</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ahmed learned coding at our digital learning center and now works remotely for a tech company, while mentoring other youth in his community to follow similar paths.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Morocco • 2023</div>
              </div>
            </CardContent>
          </Card>

          {/* Story 4 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-healthcare">
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Healthcare story" 
              className="w-full h-48 object-cover"
              data-testid="img-healthcare-heroes"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Heroes</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our mobile clinic reached remote mountain villages, providing life-saving diabetes care to elderly residents who hadn't seen a doctor in years.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Nepal • 2024</div>
              </div>
            </CardContent>
          </Card>

          {/* Story 5 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-community">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Community building story" 
              className="w-full h-48 object-cover"
              data-testid="img-building-together"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Building Together</h3>
              <p className="text-muted-foreground text-sm mb-4">
                The entire community of San Pedro came together to build their first community center, which now serves as a hub for education, healthcare, and social gatherings.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Guatemala • 2023</div>
              </div>
            </CardContent>
          </Card>

          {/* Story 6 */}
          <Card className="shadow-lg overflow-hidden" data-testid="card-story-agriculture">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Agriculture story" 
              className="w-full h-48 object-cover"
              data-testid="img-sustainable-harvests"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Harvests</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Through sustainable farming techniques and seed distribution, local farmers increased their yields by 60% while protecting the environment for future generations.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-muted-foreground">Philippines • 2024</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Be Part of the Next Story</h2>
              <p className="text-primary-foreground/90 mb-6">Your support creates these life-changing moments. Join us in writing the next chapter of hope and transformation.</p>
              <Link href="/donate">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-make-difference">
                  Make a Difference Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
