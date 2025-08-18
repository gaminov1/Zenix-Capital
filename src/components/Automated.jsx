import React from "react";

const BusinessLineOfCredit = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Business <span className="text-blue-600">Line of Credit</span>
          </h1>

          {/* Badge */}
          <span className="inline-flex items-center bg-blue-50 text-blue-800 text-sm sm:text-base font-medium px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
            Access capital on your terms!
          </span>

          {/* Description */}
          <div className="space-y-4 text-gray-600">
            <p className="text-base sm:text-lg leading-relaxed">
              A business line of credit is a financing option that gives you access
              to a set credit limit, allowing you to withdraw funds as needed.
              Interest and fees are only charged on the amount you borrow. Unlike a
              traditional term loan, a line of credit is typically used to manage
              ongoing operational expenses or to cover temporary cash flow gaps.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              The repayment terms range from <span className="text-blue-600 font-medium">six to twenty-four months</span>, with fixed
              daily, weekly, or monthly payments automatically deducted from your
              business bank account. Plus, making timely payments on your line of
              credit can help strengthen both your personal and business credit
              profiles.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            Apply Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/linec3.jpg"
              alt="Business Line of Credit"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLineOfCredit;