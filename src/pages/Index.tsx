import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceDetail from "@/components/ServiceDetail";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import kitchenCleaningImg from "@/assets/kitchen-cleaning.jpg";
import windowCleaningImg from "@/assets/window-cleaning.jpg";
import roomCleaningImg from "@/assets/room-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import laundryIroningImg from "@/assets/laundry-ironing.jpg";
import partyHelpersImg from "@/assets/party-helpers.jpg";
import babysittingImg from "@/assets/babysitting-service.jpg";

const Index = () => {
  const serviceDetails = [
    {
      id: "house-cleaning",
      title: "House Cleaning",
      description: "Complete home cleaning services to keep your house spotless and comfortable. Our professional team ensures every room is thoroughly cleaned and maintained to the highest standards.",
      image: houseCleaningImg,
      features: [
        "Living room and common areas",
        "All bedrooms and bathrooms",
        "Dusting and vacuuming",
        "Floor cleaning and mopping",
        "Surface sanitization",
        "Trash removal"
      ],
      benefits: [
        "Consistent home cleanliness",
        "More free time for family",
        "Professional cleaning standards",
        "Customizable cleaning plans",
        "Trusted and reliable staff",
        "Affordable weekly/monthly rates"
      ]
    },
    {
      id: "office-cleaning",
      title: "Office Cleaning",
      description: "Professional cleaning for offices and commercial spaces to maintain a productive, healthy work environment. We work around your schedule to minimize disruption.",
      image: officeCleaningImg,
      features: [
        "Workstation cleaning",
        "Meeting room maintenance",
        "Restroom sanitization",
        "Kitchen and break room cleaning",
        "Floor care and vacuuming",
        "Trash and recycling management"
      ],
      benefits: [
        "Professional workplace appearance",
        "Healthier work environment",
        "Increased employee productivity",
        "Flexible scheduling options",
        "Commercial-grade equipment",
        "Reliable daily or weekly service"
      ],
      reverse: true
    },
    {
      id: "kitchen-cleaning",
      title: "Kitchen Cleaning",
      description: "Specialized kitchen cleaning for a hygienic and sparkling cooking space. We tackle grease, grime, and food residue to ensure your kitchen is spotless and safe.",
      image: kitchenCleaningImg,
      features: [
        "Appliance cleaning (oven, fridge, microwave)",
        "Countertop and backsplash scrubbing",
        "Cabinet exterior cleaning",
        "Sink and faucet sanitization",
        "Floor mopping and degreasing",
        "Trash disposal"
      ],
      benefits: [
        "Food-safe cleaning products",
        "Deep grease removal",
        "Sanitized cooking surfaces",
        "Fresh and clean kitchen",
        "Expert stain removal",
        "Regular maintenance available"
      ]
    },
    {
      id: "window-cleaning",
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out for a brighter, cleaner view. Our skilled team uses professional equipment to deliver streak-free, spotless windows.",
      image: windowCleaningImg,
      features: [
        "Interior and exterior cleaning",
        "High and hard-to-reach windows",
        "Window frames and sills",
        "Screen cleaning",
        "Streak-free finish",
        "Commercial and residential"
      ],
      benefits: [
        "Enhanced natural lighting",
        "Improved curb appeal",
        "Extended window life",
        "Professional equipment used",
        "Safety measures in place",
        "Scheduled maintenance plans"
      ],
      reverse: true
    },
    {
      id: "room-cleaning",
      title: "Room Cleaning Services",
      description: "Thorough room-by-room cleaning customized to your specific needs. Whether it's a single room or your entire home, we provide detailed attention to every space.",
      image: roomCleaningImg,
      features: [
        "Dusting all surfaces",
        "Vacuuming and floor care",
        "Bed making and linen change",
        "Closet organization",
        "Furniture cleaning",
        "Air freshening"
      ],
      benefits: [
        "Customizable service",
        "Attention to detail",
        "Organized living spaces",
        "Fresh and clean rooms",
        "Flexible scheduling",
        "Affordable per-room pricing"
      ]
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning Services",
      description: "Comprehensive deep cleaning that reaches every corner and surface. Perfect for seasonal cleaning, move-ins, or when your home needs extra attention.",
      image: deepCleaningImg,
      features: [
        "Behind and under furniture",
        "Baseboards and molding",
        "Light fixtures and ceiling fans",
        "Inside appliances",
        "Detailed bathroom scrubbing",
        "Complete floor care"
      ],
      benefits: [
        "Thorough home refresh",
        "Removes built-up dirt and grime",
        "Allergen reduction",
        "Professional-grade cleaning",
        "Perfect for special occasions",
        "Comprehensive checklist included"
      ],
      reverse: true
    },
    {
      id: "laundry-ironing",
      title: "Laundry and Ironing",
      description: "Professional laundry and ironing services for perfectly fresh and pressed clothes. Save time and enjoy crisp, clean garments without the hassle.",
      image: laundryIroningImg,
      features: [
        "Washing and drying",
        "Professional ironing",
        "Folding and organizing",
        "Stain treatment",
        "Delicate garment care",
        "Linen and bedding service"
      ],
      benefits: [
        "Time-saving convenience",
        "Professional results",
        "Garment care expertise",
        "Wrinkle-free clothing",
        "Pick-up and delivery available",
        "Competitive pricing"
      ]
    },
    {
      id: "party-helpers",
      title: "Party Helpers/Cleaning",
      description: "Pre and post-party cleaning support to make your event stress-free. Focus on your guests while we handle the setup and cleanup.",
      image: partyHelpersImg,
      features: [
        "Pre-party space preparation",
        "Event setup assistance",
        "During-party support",
        "Post-party cleanup",
        "Kitchen and dining area focus",
        "Quick turnaround service"
      ],
      benefits: [
        "Stress-free entertaining",
        "More time with guests",
        "Professional cleanup",
        "Fast and efficient service",
        "Flexible staffing options",
        "Same-day cleanup available"
      ],
      reverse: true
    },
    {
      id: "babysitting",
      title: "Babysitting",
      description: "Caring, vetted babysitters who prioritize safety, play, and routine. Our qualified caregivers provide a nurturing environment where your children can learn, play, and thrive.",
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
