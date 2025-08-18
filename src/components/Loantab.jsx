import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("payments");

  const tabs = [
    { id: "payments", label: "Easy Automated Payments" },
    { id: "capital", label: "Save with Prepayment Initiatives" },
    { id: "credit", label: "Build Your Credit" },
  ];

  const content = {
    payments: {
      title: "Easy Automated Payments",
      text: (
        <>
          <p className="mb-4 text-gray-700">
            Simplify accounting and worry less with <span className="text-blue-600 font-medium">automated daily, weekly or monthly payments</span>. Most of our lending options include an amortized schedule that's easy to follow.
          </p>
          <p className="text-gray-700">
            At <span className="text-blue-600 font-medium">Zenix Capital</span>, we understand that time is money. That's why we've implemented <span className="text-blue-600 font-medium">Easy Automated Payments</span> — a seamless solution designed to simplify your financial transactions.
          </p>
        </>
      ),
      img: "/linec4.jpg",
    },
    capital: {
      title: "Save with Prepayment Initiatives",
      text: (
        <>
         <p>No prepayment penalties here! In fact, eligible businesses can save big with prepayment initiatives and/or interest forgiven funding options. Speak with a business funding advisor to learn more.
<span  className="text-blue-600 font-medium">
Managing finances smartly is key to growing any business</span>, and one effective strategy is taking advantage of prepayment options. Our prepayment initiatives are designed to help you reduce the total interest paid over the life of your loan by allowing you to pay off your balance early — without any hidden fees or penalties.By prepaying your loan, you not only gain more control over your repayment schedule but also build financial strength and credibility. </p>
        </>
      ),
      img: "/linec5.jpg",
    },
    credit: {
      title: "Build Your Credit",
      text: (
        <>
          <p className="mb-4 text-gray-700">
            Using and repaying your credit line responsibly can <span className="text-blue-600 font-medium">strengthen your personal and business credit profiles</span>.
          </p>
          <p className="text-gray-700">
            Establishing strong credit helps unlock <span className="text-blue-600 font-medium">better financing opportunities and lower interest rates</span> in the future, setting your business up for long-term success.
          </p>
        </>
      ),
      img: "/linec6.jpg",
    },
  };

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto">
      {/* Improved Responsive Tabs */}
      <div className="relative mb-6 sm:mb-8">
        {/* Scrollable tabs container */}
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white border-t-2 border-l-2 border-r-2 border-blue-600 text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
      </div>

      {/* Content - Stack on mobile, row on desktop */}
      <div className="bg-gray-50 rounded-lg sm:rounded-xl shadow-sm sm:shadow p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 md:gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            {content[activeTab].title}
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
            {content[activeTab].text}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <img
              src={content[activeTab].img}
              alt={content[activeTab].title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x500';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;