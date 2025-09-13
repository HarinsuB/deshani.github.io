import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Deshani</span>
              <span className="text-brand-green ml-1">Cleaning & Hospitality</span>
            </div>
            <p className="text-white/80 mb-4">
              Trusted, professional services for homes and offices across Sri Lanka. 
              Your comfort and satisfaction are our priority.
            </p>
            <Button
              variant="secondary"
              onClick={() => window.open("https://wa.me/94702313148", "_blank")}
            >
              Contact Us
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "Services", id: "services" },
                { label: "Cleaning", id: "cleaning" },
                { label: "Cooking", id: "cooking" },
                { label: "Baby Sitting", id: "babysitting" },
                { label: "Book Now", id: "booking" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white/80 hover:text-brand-green transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Regular House Cleaning</li>
              <li>• Deep Cleaning Services</li>
              <li>• Traditional Sri Lankan Cooking</li>
              <li>• International Cuisine</li>
              <li>• Professional Babysitting</li>
              <li>• Office Cleaning</li>
            </ul>
          </div>
        </div>

        {/* Trust Note */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold mb-2">Why Choose Deshani?</h4>
            <p className="text-white/90">
              All our staff are carefully vetted, trained, and insured. We're committed to 
              providing reliable, trustworthy services that give you peace of mind.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Deshani Cleaning & Hospitality. All rights reserved.</p>
          <p className="mt-2">
            Serving homes and offices across Sri Lanka with pride since 2020.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;