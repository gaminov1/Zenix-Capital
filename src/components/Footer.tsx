import { Mail, Phone } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Link } from "react-router-dom";

const Footer = () => {
  const fundingProducts = [
    { name: "Business Line of Credit", path: "/LineCredit" },
    { name: "Business Term Loan", path: "/business-term-loans" },
    { name: "Merchant Cash Advance", path: "/merchant-cash-advance" }
  ];

  const quickLinks = [
    { name: "Contact Us", path: "/about" },
    { name: "Get Started", path: "/get-started" },
  ];

  return (
    <ScrollAnimation>
      <footer className="bg-[#1a1a1a] text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold">
                Have Questions?{" "}
                <span className="text-[#5BA7F9]">Speak to our advisors today.</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#5BA7F9]/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#5BA7F9]" />
                  </div>
                  <div>
                    <p className="font-medium text-white/80">Call us at</p>
                    <p className="text-xl font-semibold text-[#5BA7F9]">+1(347) 510-9989</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#5BA7F9]/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#5BA7F9]" />
                  </div>
                  <div>
                    <p className="font-medium text-white/80">Email us at</p>
                    <p className="text-lg font-semibold text-[#5BA7F9]">gavriel@itmginc.com</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/60 leading-relaxed pt-4">
                *Zenix Funding Source LLC offers term loans, lines of credit, business advances, 
                and factoring in California through its California-lending licensed partners... 
                Zenix Funding Source LLC., 447 Broadway, 2nd Floor, New York, NY 10013
              </p>
            </div>

            {/* Funding Products */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Funding Products</h4>
              <ul className="space-y-3">
                {fundingProducts.map((product, index) => (
                  <li key={index}>
                    <Link 
                      to={product.path}
                      className="text-white/80 hover:text-[#5BA7F9] p-0 h-auto justify-start text-base"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-white/80 hover:text-[#5BA7F9] p-0 h-auto justify-start text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60">© 2025 Zenix Funding. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </ScrollAnimation>
  );
};
  
export default Footer;