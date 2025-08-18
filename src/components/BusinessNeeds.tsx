import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const BusinessNeeds = () => {
  const needs = [
    "Location Renovation",
    "Working Capital", 
    "Equipment Leasing",
    "Debt Consolidation",
    "Marketing"
  ];

  return (
    <ScrollAnimation>
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="order-1 lg:order-none">
            <div className="bg-[#5BA7F9] text-white px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center mb-6 -mt-2">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              OPERATING ACROSS THE USA
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Straightforward <span className="text-[#5BA7F9]">business funding</span><br/>
              without the hassle
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get stress-free financial solutions tailored specifically for your business needs.
            </p>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#5BA7F9] mb-4">
                Funding for every business need:
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're facing unexpected expenses, growth opportunities, or cash flow challenges, 
                we provide flexible financing solutions that adapt to your unique situation. Quick approvals, 
                competitive rates, and personalized service.
              </p>

              <div className="space-y-3.5">
                {needs.map((need, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3.5"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#5BA7F9] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="bg-[#5BA7F9] hover:bg-[#4A96E8] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Get Started Today
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-2 lg:order-none h-full">
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/business.jpg"
                alt="Business professionals discussing funding"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5BA7F9]/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default BusinessNeeds;