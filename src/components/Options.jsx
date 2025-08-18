import React from "react";
import { Link } from "react-router-dom";

const FundingOptions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Discover your <span className="text-blue-600">business funding</span> options in minutes.
          </h1>
          
          <div className="inline-flex items-center bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
            Fast, simple, and transparent
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Short and Simple Application
              </h2>
              <h3 className="text-lg sm:text-xl font-medium text-blue-600 mb-3">
                Explore Your Options
              </h3>
              <p className="text-gray-600">
                Get started with our streamlined application process that takes just minutes to complete.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Get Approved Quickly</h4>
                  <p className="text-gray-600 mt-1">
                    Once approved, select your custom business financing solution and receive funds as soon as 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Access Ongoing Capital</h4>
                  <p className="text-gray-600 mt-1">
                    Receive additional funds as you need them or access a revolving line of credit for recurring expenses.
                  </p>
                </div>
              </div>
            </div>
             <Link to="/get-started">
            <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Apply Now - It's Free
            </button>
            </Link>
          </div>
        </div>

        {/* Image/Graphic - Right Side */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/impimg.png" // Replace with your image path
              alt="Business funding options"
              className="w-full h-auto object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-500 opacity-20"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-blue-400 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingOptions;