import EditableContent from "@/components/EditableContent";

export default function Features() {
  const features = [
    { icon: "fas fa-bug", title: "Malware Scanning", description: "Continuous scanning for malware, viruses, and malicious code with automatic cleanup." },
    { icon: "fas fa-database", title: "Database Protection", description: "Secure your database with encryption and access controls to prevent data breaches." },
    { icon: "fas fa-user-shield", title: "User Authentication", description: "Multi-factor authentication and advanced user verification systems." },
    { icon: "fas fa-cloud", title: "Cloud Backup", description: "Automated cloud backups with point-in-time recovery options." },
    { icon: "fas fa-tachometer-alt", title: "Performance Monitoring", description: "Real-time performance metrics and optimization recommendations." },
    { icon: "fas fa-headset", title: "Expert Support", description: "24/7 support from certified security professionals." },
  ];

  return (
    <div data-testid="features-page">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableContent tag="h1" className="text-5xl font-bold mb-6">Comprehensive Security Features</EditableContent>
            <EditableContent tag="p" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our full suite of security features designed to protect your website from every angle.
            </EditableContent>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border" data-testid={`feature-card-${index}`}>
                <i className={`${feature.icon} text-3xl text-primary mb-4`}></i>
                <EditableContent tag="h3" className="text-xl font-semibold mb-3">{feature.title}</EditableContent>
                <EditableContent tag="p" className="text-muted-foreground">{feature.description}</EditableContent>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
