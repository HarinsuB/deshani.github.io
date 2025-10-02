import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, ChefHat, Sparkles, Bed, Loader, Shirt, PartyPopper, Baby } from "lucide-react";
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import kitchenCleaningImg from "@/assets/kitchen-cleaning.jpg";
import windowCleaningImg from "@/assets/window-cleaning.jpg";
import roomCleaningImg from "@/assets/room-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import laundryIroningImg from "@/assets/laundry-ironing.jpg";
import partyHelpersImg from "@/assets/party-helpers.jpg";
import babysittingImg from "@/assets/babysitting-service.jpg";

const ServicesOverview = () => {
  const services = [
    {
      id: "house-cleaning",
      title: "House Cleaning",
      description: "Complete home cleaning services to keep your house spotless and comfortable.",
      icon: <Home className="w-8 h-8 text-brand-green" />,
      image: houseCleaningImg,
      features: ["Living Areas", "Bedrooms", "Bathrooms", "Regular Maintenance"]
    },
    {
      id: "office-cleaning",
      title: "Office Cleaning",
      description: "Professional cleaning for offices and commercial spaces to maintain a productive environment.",
      icon: <Building2 className="w-8 h-8 text-brand-green" />,
      image: officeCleaningImg,
      features: ["Workspaces", "Meeting Rooms", "Common Areas", "Daily/Weekly Service"]
    },
    {
      id: "kitchen-cleaning",
      title: "Kitchen Cleaning",
      description: "Specialized kitchen cleaning for a hygienic and sparkling cooking space.",
      icon: <ChefHat className="w-8 h-8 text-brand-green" />,
      image: kitchenCleaningImg,
      features: ["Appliances", "Countertops", "Cabinets", "Deep Sanitization"]
    },
    {
      id: "window-cleaning",
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out for a brighter, cleaner view.",
      icon: <Sparkles className="w-8 h-8 text-brand-green" />,
      image: windowCleaningImg,
      features: ["Interior & Exterior", "High Windows", "Frames & Sills", "Streak-Free Finish"]
    },
    {
      id: "room-cleaning",
      title: "Room Cleaning Services",
      description: "Thorough room-by-room cleaning customized to your specific needs.",
      icon: <Bed className="w-8 h-8 text-brand-green" />,
      image: roomCleaningImg,
      features: ["Dusting", "Vacuuming", "Organizing", "Fresh Linens"]
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning Services",
      description: "Comprehensive deep cleaning that reaches every corner and surface.",
      icon: <Loader className="w-8 h-8 text-brand-green" />,
      image: deepCleaningImg,
      features: ["Behind Furniture", "Hard-to-Reach Areas", "Detailed Scrubbing", "Full Sanitization"]
    },
    {
      id: "laundry-ironing",
      title: "Laundry and Ironing",
      description: "Professional laundry and ironing services for perfectly fresh and pressed clothes.",
      icon: <Shirt className="w-8 h-8 text-brand-green" />,
      image: laundryIroningImg,
      features: ["Washing", "Drying", "Ironing", "Folding & Organizing"]
    },
    {
      id: "party-helpers",
      title: "Party Helpers/Cleaning",
      description: "Pre and post-party cleaning support to make your event stress-free.",
      icon: <PartyPopper className="w-8 h-8 text-brand-green" />,
      image: partyHelpersImg,
      features: ["Event Setup", "During Party Support", "Post-Party Cleanup", "Quick Turnaround"]
    },
    {
      id: "babysitting",
      title: "Babysitting",
      description: "Caring, vetted babysitters who prioritize safety, play, and routine.",
      icon: <Baby className="w-8 h-8 text-brand-green" />,
      image: babysittingImg,
      features: ["Qualified Caregivers", "Educational Activities", "Safety First", "Flexible Hours"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6">
            Our Services
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Professional, reliable services designed to make your life easier and more comfortable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-teal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-brand-gray">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection(service.id)}
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;