import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BusinessNeeds from "@/components/BusinessNeeds";
import FundingProducts from "@/components/FundingProducts";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Funding from "@/components/Funding"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BusinessNeeds />
      <FundingProducts />
      <Funding/>
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
