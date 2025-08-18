import { Clock, DollarSign, CreditCard } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Streamlined Funding",
      description: "AVAILABLE WITHIN HOURS OF APPROVAL",
    },
    {
      icon: DollarSign,
      title: "Nearly $1B Funded",
      description: "TO THOUSANDS OF BUSINESSES ACROSS SEVERAL INDUSTRIES",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "MULTIPLE OPTIONS TO FIT YOUR INDIVIDUAL BUSINESS NEEDS",
    }
  ];

  return (
    <ScrollAnimation>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-lg group-hover:bg-[#5BA7F9] transition-all duration-300">
                  <feature.icon 
                    className="w-8 h-8 text-[#5BA7F9] group-hover:text-white transition-all duration-300" 
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#5BA7F9]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default Features;