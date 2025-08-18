import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const FundingProducts = () => {
  const products = [
    {
      title: "Business Line of Credit",
      features: [
        "Revolving credit lines from $10,000 to $1 million",
        "6 – 24 month terms",
        "Several payment options, including monthly ACHs"
      ]
    },
    {
      title: "Business Term Loan", 
      features: [
        "Revenue-driven funding from$25,000 to $5 million",
        "Terms up to 60 months",
        "Several payment options, including monthly ACH"
      ]
    },
    {
      title: "Merchant Cash Advance",
      features: [
        "Revenue-driven funding from $5,000 to $5 million",
        "Terms up to 24 months", 
        "Several payment options, including monthly ACH"
      ]
    }
  ];

  return (
    <ScrollAnimation>
    <section className="py-24 bg-gradient-to-b from-[#5BA7F9] to-[#3A86D6] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            TAILORED FINANCING SOLUTIONS FOR YOUR BUSINESS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Source for <span className="text-black">Reliable</span> Funding Solutions
          </h2>
          
          <div className="space-y-4 text-lg text-white/90">
            <p>
              Numbers only ever tell part of the story. Interpretation and conviction 
              informs application.
            </p>
            <p>
              We combine unparalleled depth and breadth of market data with our 
              team's expertise to deliver competitive advantage.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-white">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-4">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white/90 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default FundingProducts;