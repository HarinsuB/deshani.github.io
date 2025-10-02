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
        <div className="max-w-2xl mx-auto mb-8 text-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Deshani</span>
              <span className="text-brand-green ml-1">Cleaning & Hospitality</span>
            </div>
            <p className="text-white/80 mb-4">
              Trusted, professional services for homes and offices across Qatar.
              Your comfort and satisfaction are our priority.
            </p>
            <Button
              variant="secondary"
              onClick={() => window.open("https://wa.me/94702313148", "_blank")}
            >
              Contact Us
            </Button>
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
            Serving homes and offices across Qatar with pride since 2020.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;