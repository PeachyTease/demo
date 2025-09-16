import EditableContent from "@/components/EditableContent";
import EditableImage from "@/components/EditableImage";

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <EditableContent tag="h1" className="text-5xl font-bold mb-6">About SiteSecure Pro</EditableContent>
              <EditableContent tag="p" className="text-xl mb-6 text-muted-foreground">
                Founded in 2020, SiteSecure Pro has been at the forefront of web security innovation. We protect over 50,000 websites worldwide with our cutting-edge security solutions.
              </EditableContent>
              <EditableContent tag="p" className="text-lg mb-8 text-muted-foreground">
                Our mission is to make enterprise-level security accessible to businesses of all sizes. We believe that every website deserves the highest level of protection.
              </EditableContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border" data-testid="vision-card">
                  <EditableContent tag="h3" className="font-semibold mb-2">Our Vision</EditableContent>
                  <EditableContent tag="p" className="text-muted-foreground text-sm">To create a safer internet for everyone through innovative security technology.</EditableContent>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border" data-testid="values-card">
                  <EditableContent tag="h3" className="font-semibold mb-2">Our Values</EditableContent>
                  <EditableContent tag="p" className="text-muted-foreground text-sm">Transparency, reliability, and customer-first approach guide everything we do.</EditableContent>
                </div>
              </div>
            </div>
            <div>
              <EditableImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional cybersecurity team"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
