import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Testimonial = () => {
  return (
    <ScrollAnimation>
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5BA7F9] to-[#3A86D6] rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 blur-lg"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-[500px]">
              <img
                src="/shopowner.jpg" // Updated public folder image path
                alt="Satisfied business owner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 bg-white p-4 rounded-full shadow-md">
                <Quote className="w-6 h-6 text-[#5BA7F9]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Here's what our clients <span className="text-[#5BA7F9]">say about us</span>
            </h2>
            
            <div className="relative">
              <blockquote className="text-xl text-gray-600 leading-relaxed pl-8 border-l-4 border-[#5BA7F9]">
                "Jacob was amazing. He explained what was and wasn't possible, 
                honestly and professionally. After applying, he got me funds within one 
                day, and it was surprisingly simple!"
              </blockquote>
            </div>
            
            <div className="space-y-1">
              <div className="font-bold text-lg text-gray-900">
                ENC Mechanic and Automotive
              </div>
              <div className="text-gray-500">
                Satisfied Zenix Funding Client
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="bg-[#5BA7F9] hover:bg-[#4A96E8] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                About Zenix Funding
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default Testimonial;