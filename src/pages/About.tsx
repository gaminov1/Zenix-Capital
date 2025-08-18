import React from 'react'
import Header from '@/components/Header'
import Testimonial from '@/components/Testimonial'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import {ScrollAnimation} from '@/components/ScrollAnimation'

function About() {
  return (
    <div>
      <Header/>
      <ScrollAnimation>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[128px] pb-32">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about.mp4" type="video/mp4" />
        </video>

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-950/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              The Zenix Funding{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Difference
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              At Zenix Funding, everyone from our interns to our executives is dedicated to helping businesses secure the ideal working capital precisely when it's needed
            </p>
          </div>
          <a href="/get-started" className="inline-block">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Apply now
            </button>
        </a>
        </div>
      </section>
      </ScrollAnimation>
{/* /////////////STATS SECTION//////// */}
<ScrollAnimation>
<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
      The Zenix Funding Difference
    </h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      Real estate needs and expectations might've changed, but the challenge remains the same – 
      businesses need clarity and best judgement to connect the ideas, people and places that make them successful.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-gray-100">
      <span className="text-5xl font-bold text-blue-600">03</span>
      <p className="mt-4 text-lg text-gray-700">
        UK OFFICES - LONDON, CAMBRIDGE & MANCHESTER
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-gray-100">
      <span className="text-5xl font-bold text-blue-600">51</span>
      <p className="mt-4 text-lg text-gray-700">
        PEOPLE
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-gray-100">
      <span className="text-5xl font-bold text-blue-600">02</span>
      <p className="mt-4 text-lg text-gray-700">
        AFFILIATED EUROPEAN OFFICES — MILAN & AMSTERDAM
      </p>
    </div>
  </div>
</section>
</ScrollAnimation>

{/* ////////////Our Story section//////////// */}
<ScrollAnimation>
 <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section - Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/about.jpg" // Replace with your image path
              alt="Zenix Funding team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Right Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Zenix Funding was founded with a single purpose: to empower entrepreneurs and small business owners by providing accessible, transparent, and fast capital solutions. We understand the challenges faced by growing businesses, because we've been there ourselves.
            </p>
            
            <p>
              From global real estate investors to specialist developers, distribution giants to biotech start-ups, Zenix Funding advises the businesses that are driving the economy, creating jobs and harnessing innovation. Combining our expertise with best-in-class market intelligence and data enables us to build bespoke strategies to achieve our clients' objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
</ScrollAnimation>

    {/* //////////////Standard Section//////////////// */}
    <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Upholding <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Standards</span> That Define Everything We Do
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Collaboration Card */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 transition-all duration-500 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Collaboration</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Zenix Funding's success is built upon our unique and strategic approach to teamwork, 
              building custom-fit teams capable of best servicing our clients. We incentivize 
              collaboration and ensure everyone has a voice and is supported to achieve their potential.
            </p>
          </div>

          {/* Dedication Card */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 transition-all duration-500 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Dedication</h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-blue-900/50 rounded-full p-1 mr-4 mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-1">Integrity</h3>
                  <p className="text-gray-300">We maintain the highest ethical standards in all our dealings</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-900/50 rounded-full p-1 mr-4 mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-1">Connection</h3>
                  <p className="text-gray-300">We build lasting relationships based on trust and mutual success</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>
    {/* //////////////////hero section/////////// */}
    <ScrollAnimation>
          <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/heroabout.jpg" // Replace with your image
          alt="Modern office workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 p-8 sm:p-10 rounded-xl backdrop-blur-sm shadow-sm mx-auto text-center">
          {/* Centered Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="block mb-4">Empowering Growth.</span>
            <span className="text-blue-600 mb-4">The Zenix Funding Advantage.</span>
          </h1>
          
          {/* Centered Paragraph */}
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            At Zenix Funding, we go beyond traditional financing by offering tailored solutions designed to meet your business goals. With fast approvals, flexible terms, and a team that truly understands your challenges.
          </p>
        </div>
      </div>
    </section>
    </ScrollAnimation>
    <Testimonial />
      <CTASection />
      <Footer />
    </div>
  )
}

export default About