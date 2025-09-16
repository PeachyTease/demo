import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/features", label: "Features" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary" data-testid="site-logo">SiteSecure Pro</h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                        location === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      data-testid={`nav-link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="get-started-button">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location === item.path
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
