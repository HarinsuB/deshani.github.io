import { ReactNode } from "react";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  reverse?: boolean;
}

const ServiceDetail = ({ id, title, description, image, features, benefits, reverse = false }: ServiceDetailProps) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6">
              {title}
            </h2>
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-brand-teal mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-brand-teal mb-4">Benefits</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-brand-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;