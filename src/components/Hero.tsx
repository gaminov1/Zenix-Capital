import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  // State for animated counters
  const [funded, setFunded] = useState(0);
  const [approval, setApproval] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 2000;
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Animate $500M+
      setFunded(Math.floor(progress * 500));

      // Animate 24 hours (just count up to 24)
      setApproval(Math.floor(progress * 24));

      // Animate 98%
      setSuccessRate(Math.floor(progress * 98));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    animateCounters();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[128px]">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-950/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Professional Business Funding{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Access the capital your business needs with our streamlined funding
            solutions. Fast approvals, competitive rates, and personalized service.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 h-auto animate-scale-in shadow-lg bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white transition-all duration-300"
              asChild
            >
              <Link to="/get-started">Get Started Today</Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 text-center shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-sky-400">${funded}M+</div>
              <div className="text-sm text-white/80">Funded</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 text-center shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-sky-400">{approval}hrs</div>
              <div className="text-sm text-white/80">Fast Approval</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 text-center shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-sky-400">{successRate}%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;