import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/94702313148", "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Ready to experience our trusted services? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-semibold text-brand-teal mb-2">Phone</h3>
              <Button
                variant="link"
                onClick={openWhatsApp}
                className="text-brand-gray hover:text-brand-green p-0 h-auto font-normal"
              >
                +94 70 231 3148
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-semibold text-brand-teal mb-2">Email</h3>
              <a
                href="mailto:info@deshanicleaning.lk"
                className="text-brand-gray hover:text-brand-green transition-colors"
              >
                info@deshanicleaning.lk
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-semibold text-brand-teal mb-2">Hours</h3>
              <p className="text-brand-gray text-sm">
                Mon - Sat<br />
                8:00 AM - 6:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-semibold text-brand-teal mb-2">Coverage</h3>
              <p className="text-brand-gray text-sm">
                All Districts<br />
                Across Qatar
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" onClick={openWhatsApp} className="text-lg px-8 py-4">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;