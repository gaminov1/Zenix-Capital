import React from "react";
import { Link } from "react-router-dom";
const BusinessLineOfCredit = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white max-w-7xl mx-auto mt-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Revenue<span className="text-blue-600">-Driven Funding </span>
                    </h1>

                    {/* Badge */}
                    <span className="inline-flex items-center bg-blue-50 text-blue-800 text-sm sm:text-base font-medium px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                        Bank-comparable financing perfect for larger projects!
                    </span>

                    {/* Description */}
                    <div className="space-y-4 text-gray-600">
                        <p className="text-base sm:text-lg leading-relaxed">
                            Bank-comparable financing perfect for larger projects. ‍
                            A key element of managing a business is securing the working capital needed to keep operations running smoothly. Whether you’re looking to upgrade equipment, meet payroll, or support expansion, many business owners traditionally turn to bank loans, which often involve extensive paperwork and time delays. That’s where Direct Funding comes in. At Direct Funding, we’ve made the business funding process more efficient and accessible for small business owners. Our lenders offer term loans ranging from $10K to $5M, with flexible repayment options, up to 60 months. The application process is straightforward, and once approved, funds can be available as quickly as the next business day.
                        </p>
                    </div>

                    {/* CTA Button */}
                     <Link to="/get-started">
                    <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        Apply Now
                    </button>
                    </Link>
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