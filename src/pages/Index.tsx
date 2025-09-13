import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceDetail from "@/components/ServiceDetail";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import cleaningImg from "@/assets/cleaning-service.jpg";
import cookingImg from "@/assets/cooking-service.jpg";
import babysittingImg from "@/assets/babysitting-service.jpg";

const Index = () => {
  const serviceDetails = [
    {
      id: "cleaning",
      title: "Professional Cleaning Services",
      description: "From regular upkeep to deep cleans, our trained team leaves your space spotless. We use eco-friendly products and proven techniques to ensure your home or office is not just clean, but healthy and inviting.",
      image: cleaningImg,
      features: [
        "Regular weekly/monthly cleaning",
        "Deep cleaning services",
        "Office and commercial cleaning",
        "Eco-friendly cleaning products",
        "Post-construction cleanup",
        "Move-in/move-out cleaning"
      ],
      benefits: [
        "Save time for what matters most",
        "Professional-grade equipment",
        "Fully insured and bonded staff",
        "Flexible scheduling",
        "Consistent quality standards",
        "Affordable pricing packages"
      ]
    },
    {
      id: "cooking",
      title: "Home-Style Cooking Services",
      description: "Home-style meal prep tailored to your taste, nutrition, and schedule. Our experienced cooks specialize in traditional Sri Lankan cuisine while also preparing international dishes to suit your family's preferences.",
      image: cookingImg,
      features: [
        "Traditional Sri Lankan cuisine",
        "International meal preparation",
        "Custom meal planning",
        "Dietary restriction accommodation",
        "Fresh ingredient sourcing",
        "Meal prep and storage"
      ],
      benefits: [
        "Nutritious home-cooked meals",
        "Time-saving meal solutions",
        "Cultural authenticity",
        "Cost-effective dining",
        "Customized to your taste",
        "Family-friendly options"
      ],
      reverse: true
    },
    {
      id: "babysitting",
      title: "Trusted Babysitting Services",
      description: "Caring, vetted babysitters who prioritize safety, play, and routine. Our qualified caregivers provide a nurturing environment where your children can learn, play, and thrive while you're away.",
      image: babysittingImg,
      features: [
        "Background-checked caregivers",
        "Age-appropriate activities",
        "Homework and learning support",
        "Meal preparation for children",
        "Emergency response training",
        "Flexible hourly or daily care"
      ],
      benefits: [
        "Peace of mind for parents",
        "Safe and nurturing environment",
        "Educational activities",
        "Consistent routine maintenance",
        "Emergency preparedness",
        "Reliable backup childcare"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      
      {serviceDetails.map((service) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          features={service.features}
          benefits={service.benefits}
          reverse={service.reverse}
        />
      ))}
      
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
