import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import TabSetion from '@/components/TabSection';
import Automated from '@/components/Automated';
import Options from '@/components/Options';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LoanFund from '@/components/LoanFund';
import Testimonial from '@/components/Testimonial';
import LoanTab from '@/components/Loantab';
import {ScrollAnimation} from '@/components/ScrollAnimation';

const LineOfCreditSection = () => {
    return (
        <>
            <Header />
            <section className="relative min-h-screen w-full flex items-center justify-center">
                {/* Enhanced Background with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/merchant.jpg"
                        alt="Business line of credit background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
                </div>

                {/* Content with Transparent Background */}
                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Text Content - Full Width and More Prominent */}
                            <div className="text-white space-y-6 w-full">
                                <span className="inline-block text-base font-semibold text-blue-300 mb-2 tracking-wider">
                                  MERCHANT CASH ADVANCE
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    MERCHANT <br className="hidden md:block" />
                                    <span className="text-blue-300">CASH ADVANCE</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                                    Receive up to $1 million in revenue-based funding for any credit type and industry, available in as little as 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-16">
                <ScrollAnimation>
            <LoanFund />
            </ScrollAnimation>
            </div>
            <div className="mt-16"></div>
            <ScrollAnimation>
            <LoanTab/>
            </ScrollAnimation>
            <div className="mt-16">
                <ScrollAnimation>
             <Options />
             </ScrollAnimation>
            </div>
            <div className="mt-16"></div>
            <ScrollAnimation>
            <Testimonial />
            </ScrollAnimation>
            <div className="mt-16"></div>
            <ScrollAnimation>
            <CTASection />
            </ScrollAnimation>
            <Footer />
        </>
    );
};

export default LineOfCreditSection;