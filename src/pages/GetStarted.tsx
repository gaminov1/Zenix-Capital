"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CheckCircle, Clock, Shield, Zap, DollarSign, Users, Building, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const ScrollAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    annualRevenue: "",
    fundingAmount: "",
    purpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      businessName: formData.businessName,
      industry: formData.industry,
      annualRevenue: formData.annualRevenue,
      fundingAmount: formData.fundingAmount,
      purpose: formData.purpose,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };  
    
    emailjs
      .send(
        "service_6zkpnhy",
        "template_cfpxkod",
        templateParams,
        { publicKey: "phbzi59vZjaozZbbR" }
      )
      .then(
        () => {
          alert("✅ Application submitted successfully!");
          setFormData({
            businessName: "",
            industry: "",
            annualRevenue: "",
            fundingAmount: "",
            purpose: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
          });
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.57), rgba(255, 255, 255, 0.54)), url(/getstarted.jpg)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="min-h-screen">
        <Header headerTextColor="black" />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <ScrollAnimation>
              <Breadcrumb className="mb-8">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="hover:text-[#5BA7F9] transition-colors">
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Get Started</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ScrollAnimation>

            {/* Hero Section */}
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 bg-[#5BA7F9] text-white hover:bg-[#4A96E8]">
                  Professional Funding Application
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Start Your <span className="text-[#5BA7F9]">Funding Journey</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete our secure application process and get pre-approved for business funding in as little as 24 hours.
                </p>
              </div>
            </ScrollAnimation>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <Clock className="w-12 h-12 text-[#5BA7F9] mx-auto mb-4" />,
                  title: "Fast Process",
                  description: "Get approved in 24-48 hours"
                },
                {
                  icon: <Shield className="w-12 h-12 text-[#5BA7F9] mx-auto mb-4" />,
                  title: "Secure & Safe",
                  description: "Bank-level security for your data"
                },
                {
                  icon: <DollarSign className="w-12 h-12 text-[#5BA7F9] mx-auto mb-4" />,
                  title: "Competitive Rates",
                  description: "Best rates in the market"
                },
                {
                  icon: <Users className="w-12 h-12 text-[#5BA7F9] mx-auto mb-4" />,
                  title: "Expert Support",
                  description: "Dedicated funding specialists"
                }
              ].map((benefit, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90">
                      <CardHeader>
                        {benefit.icon}
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Application Form */}
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-xl border border-gray-200 bg-white/90">
                  <CardHeader className="text-center pb-8">
                    <motion.div 
                      key={step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-2xl text-gray-900">
                        Step {step} of 3: {step === 1 ? "Business Information" : step === 2 ? "Funding Details" : "Contact Information"}
                      </CardTitle>
                    </motion.div>
                    <CardDescription className="text-gray-600">
                      Please provide accurate information to ensure fast processing
                    </CardDescription>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
                      <div 
                        className="bg-gradient-to-r from-[#5BA7F9] to-[#3A86D6] h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                      ></div>
                    </div>
                  </CardHeader>

             <CardContent className="space-y-6">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: step > 1 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Business Name *</Label>
                          <Input
                            id="businessName"
                            value={formData.businessName}
                            onChange={(e) => handleInputChange("businessName", e.target.value)}
                            placeholder="Enter your business name"
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Select onValueChange={(value) => handleInputChange("industry", value)}>
                            <SelectTrigger className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="restaurant">Restaurant</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="professional-services">Professional Services</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="annualRevenue">Annual Revenue *</Label>
                          <Select onValueChange={(value) => handleInputChange("annualRevenue", value)}>
                            <SelectTrigger className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]">
                              <SelectValue placeholder="Select annual revenue" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                              <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                              <SelectItem value="5m+">$5,000,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="fundingAmount">Funding Amount Needed *</Label>
                          <Select onValueChange={(value) => handleInputChange("fundingAmount", value)}>
                            <SelectTrigger className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]">
                              <SelectValue placeholder="Select funding amount" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                              <SelectItem value="500k+">$500,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="purpose">Purpose of Funding *</Label>
                          <Select onValueChange={(value) => handleInputChange("purpose", value)}>
                            <SelectTrigger className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]">
                              <SelectValue placeholder="What will you use the funding for?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="working-capital">Working Capital</SelectItem>
                              <SelectItem value="equipment">Equipment Purchase</SelectItem>
                              <SelectItem value="expansion">Business Expansion</SelectItem>
                              <SelectItem value="inventory">Inventory</SelectItem>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Additional Details</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Please provide any additional details about your funding needs..."
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9] min-h-[120px]"
                          />
                        </div>

                        {/* Funding Options Preview */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Building className="w-5 h-5 mr-2 text-[#5BA7F9]" />
                            Recommended Funding Options
                          </h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            {[
                              {
                                title: "SBA Loans",
                                description: "Low rates, long terms",
                                rate: "From 5.5% APR"
                              },
                              {
                                title: "Business Line of Credit",
                                description: "Flexible access to funds",
                                rate: "From 7.2% APR"
                              },
                              {
                                title: "Equipment Financing",
                                description: "Finance your equipment",
                                rate: "From 6.1% APR"
                              }
                            ].map((option, index) => (
                              <motion.div 
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                              >
                                <h4 className="font-medium text-gray-900">{option.title}</h4>
                                <p className="text-sm text-gray-600">{option.description}</p>
                                <div className="text-[#5BA7F9] font-semibold mt-2">{option.rate}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="Enter your first name"
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Enter your last name"
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-[#5BA7F9] focus:ring-[#5BA7F9]"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-8">
                    {step > 1 && (
                      <Button 
                        variant="outline" 
                        onClick={prevStep} 
                        className="px-8 border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        Previous
                      </Button>
                    )}
                    
                    <div className="ml-auto">
                      {step < 3 ? (
                        <Button 
                          onClick={nextStep} 
                          className="px-8 bg-[#5BA7F9] hover:bg-[#4A96E8] text-white"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button 
                         onClick={handleSubmit}
                          className="px-8 bg-[#5BA7F9] hover:bg-[#4A96E8] text-white"
                        >
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Submit Application
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Trust Indicators */}
            <ScrollAnimation>
              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-6">Trusted by thousands of businesses nationwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                  {[
                    {
                      icon: <Shield className="w-6 h-6 text-[#5BA7F9]" />,
                      text: "SSL Secured"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-[#5BA7F9]" />,
                      text: "FDIC Insured"
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-[#5BA7F9]" />,
                      text: "BBB A+ Rated"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
                    >
                      {item.icon}
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;