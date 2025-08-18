import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const CTASection = () => {

  return (
    <ScrollAnimation>
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Rounding and Spacing */}
      <div className="absolute inset-4 rounded-2xl overflow-hidden z-0 shadow-xl">
        <img
          src="/CTA.jpg" // Replace with your image path
          alt="Business funding background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Interested in SBA 7a, 504, or Express Financing?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start Your Application Now!!
          </p>
          
          <Button 
            asChild
            className="bg-[#5BA7F9] hover:bg-[#4A96E8] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <Link to="/get-started">
              Start Your Application Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default CTASection;