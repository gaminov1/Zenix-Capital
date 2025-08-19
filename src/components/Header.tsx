import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const Header = ({ headerTextColor }: { headerTextColor?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFundingDropdownOpen, setIsFundingDropdownOpen] = useState(false);
  const [isFundingHovered, setIsFundingHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".funding-dropdown")) {
        setIsFundingDropdownOpen(false);
      }
    };

    if (isFundingDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFundingDropdownOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with background */}
         <Link
          to="/"
          className="flex items-center p-2 rounded-md bg-white/70 backdrop-blur-sm h-[70px] w-auto"
        >
          <img
            src="logo.png"
            alt="Company Logo"
            className="h-[60px] w-auto object-contain" // Increased height for better readability
            style={{ maxWidth: "220px" }} // Optional: set a max width for larger logos
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Funding Solutions Dropdown */}
          <div
            className="relative group funding-dropdown"
            onMouseEnter={() => {
              setIsFundingHovered(true);
              setIsFundingDropdownOpen(true);
            }}
            onMouseLeave={() => {
              setIsFundingHovered(false);
              // Only close if not clicked open
              if (!isFundingDropdownOpen) {
                setIsFundingDropdownOpen(false);
              }
            }}
          >
            <button
              className={`flex items-center font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-sky-400"
              }`}
              onClick={() => setIsFundingDropdownOpen(!isFundingDropdownOpen)}
            >
              Funding Solutions
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform ${
                  isFundingDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isFundingDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                onMouseEnter={() => setIsFundingHovered(true)}
                onMouseLeave={() => {
                  setIsFundingHovered(false);
                  setIsFundingDropdownOpen(false);
                }}
              >
                <Link
                  to="/LineCredit"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsFundingDropdownOpen(false)}
                >
                  Business Line Of Credit
                </Link>
                <Link
                  to="/business-term-loans"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsFundingDropdownOpen(false)}
                >
                  Business Term Loans
                </Link>
                <Link
                  to="/merchant-cash-advance"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsFundingDropdownOpen(false)}
                >
                  Merchant Cash Advance
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-sky-400"
            }`}
          >
            About Us
          </Link>
          <a
            href="tel:+1(347) 510-9989"
            className={`font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-sky-400"
            }`}
          >
            +1(347) 510-9989
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="default"
            size="lg"
            className="bg-black text-white hover:bg-gray-900"
            asChild
            style={{ backgroundColor: "#5CA7F9" }}
          >
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {/* Mobile Funding Solutions Dropdown */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-white hover:text-sky-400 font-medium py-2 px-3 rounded hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsFundingDropdownOpen(!isFundingDropdownOpen)}
              >
                <span>Funding Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isFundingDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isFundingDropdownOpen && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link
                    to="/LineCredit"
                    className="flex items-center text-gray-300 hover:text-white py-1 px-3 rounded hover:bg-gray-800/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Business Line Of Credit
                  </Link>
                  <Link
                    to="/business-term-loans"
                    className="flex items-center text-gray-300 hover:text-white py-1 px-3 rounded hover:bg-gray-800/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Business Term Loans
                  </Link>
                  <Link
                    to="/merchant-cash-advance"
                    className="flex items-center text-gray-300 hover:text-white py-1 px-3 rounded hover:bg-gray-800/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Merchant Cash Advance
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="flex items-center justify-between text-white hover:text-sky-400 font-medium py-2 px-3 rounded hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+1(347) 510-9989"
              className="flex items-center justify-between text-white hover:text-sky-400 font-medium py-2 px-3 rounded hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call Us
              <ChevronRight className="w-5 h-5" />
            </a>
            <Button
              variant="default"
              size="lg"
              asChild
              className="mt-4 bg-sky-500 hover:bg-sky-600 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link
                to="/get-started"
                className="flex items-center justify-center"
              >
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
