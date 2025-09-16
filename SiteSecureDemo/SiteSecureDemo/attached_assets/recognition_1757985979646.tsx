import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Star, Award, Shield, Globe, Handshake } from "lucide-react";

export default function Recognition() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-recognition-title">Recognition & Partnerships</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-recognition-description">
            Honored to be recognized by leading organizations and proud to partner with incredible institutions worldwide.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Awards & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg text-center" data-testid="card-award-global-impact">
              <CardContent className="p-8">
                <div className="bg-accent text-accent-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Impact Award</h3>
                <p className="text-muted-foreground text-sm mb-2">United Nations Association</p>
                <p className="text-muted-foreground text-sm">Recognizing outstanding contribution to sustainable development goals</p>
                <div className="text-xs text-muted-foreground mt-3">2024</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center" data-testid="card-award-humanitarian">
              <CardContent className="p-8">
                <div className="bg-secondary text-secondary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Humanitarian Excellence</h3>
                <p className="text-muted-foreground text-sm mb-2">International Red Cross</p>
                <p className="text-muted-foreground text-sm">For innovative approaches to community healthcare delivery</p>
                <div className="text-xs text-muted-foreground mt-3">2023</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center" data-testid="card-award-education">
              <CardContent className="p-8">
                <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Education Innovation</h3>
                <p className="text-muted-foreground text-sm mb-2">UNESCO</p>
                <p className="text-muted-foreground text-sm">Digital learning initiatives in underserved communities</p>
                <div className="text-xs text-muted-foreground mt-3">2023</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Certifications & Memberships</h2>
          <Card className="bg-muted">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Card className="shadow mb-3" data-testid="card-cert-guidestar">
                    <CardContent className="p-4">
                      <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">GuideStar Gold Seal</div>
                      <div className="text-xs text-muted-foreground">Transparency & Accountability</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center">
                  <Card className="shadow mb-3" data-testid="card-cert-bbb">
                    <CardContent className="p-4">
                      <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">BBB Accredited</div>
                      <div className="text-xs text-muted-foreground">Better Business Bureau</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center">
                  <Card className="shadow mb-3" data-testid="card-cert-ngo-council">
                    <CardContent className="p-4">
                      <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">NGO Council Member</div>
                      <div className="text-xs text-muted-foreground">International NGO Council</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center">
                  <Card className="shadow mb-3" data-testid="card-cert-partner-alliance">
                    <CardContent className="p-4">
                      <Handshake className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">Partner Alliance</div>
                      <div className="text-xs text-muted-foreground">Global Humanitarian Alliance</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Partners</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Corporate Partners */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Corporate Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-techforgood">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">TechForGood Initiative</div>
                      <div className="text-sm text-muted-foreground">Technology infrastructure support</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-greenenergy">
                    <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">GreenEnergy Solutions</div>
                      <div className="text-sm text-muted-foreground">Sustainable energy projects</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-edutech">
                    <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">EduTech Partners</div>
                      <div className="text-sm text-muted-foreground">Educational technology & training</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Institutional Partners */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Institutional Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-university">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Global University Network</div>
                      <div className="text-sm text-muted-foreground">Research & development collaboration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-health-alliance">
                    <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">International Health Alliance</div>
                      <div className="text-sm text-muted-foreground">Medical expertise & resources</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-muted rounded" data-testid="partner-leaders-network">
                    <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Community Leaders Network</div>
                      <div className="text-sm text-muted-foreground">Local implementation & support</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financial Transparency */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Financial Transparency</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="stat-program-funding">
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-primary-foreground/90">Direct Program Funding</div>
              </div>
              <div className="text-center" data-testid="stat-admin-costs">
                <div className="text-3xl font-bold mb-2">8%</div>
                <div className="text-primary-foreground/90">Administrative Costs</div>
              </div>
              <div className="text-center" data-testid="stat-fundraising-costs">
                <div className="text-3xl font-bold mb-2">5%</div>
                <div className="text-primary-foreground/90">Fundraising Expenses</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-view-financial-report">
                View Full Financial Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
