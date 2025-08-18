import { BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
const ZenixDifference = () => {
  return (
    <ScrollAnimation>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The <span className="text-[#5BA7F9]">Zenix Capital</span>{" "}
              Difference
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                At Zenix Capital, everyone from our interns to our executives is
                dedicated to helping businesses secure the ideal working capital
                precisely when it's needed. Recognizing that there is no
                one-size-fits-all solution for small business funding, we've
                developed tailored options to meet your specific needs.
              </p>
              <p>
                Understanding the importance of partnering with a trustworthy
                source for funding is why every member of our team is committed
                to building strong relationships with our clients, guiding you
                through every step of the process.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Transparent and Honest */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-[#5BA7F9]/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#5BA7F9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Transparent and Honest
              </h3>
              <p className="text-gray-600 mb-6">
                No hidden fees.
                <br /> No unexpected surprises.
              </p>
            </div>

            {/* Trusted Network */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-[#5BA7F9]/10 rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-[#5BA7F9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Trusted Network of Partners
              </h3>
              <p className="text-gray-600 mb-6">
                Our network of vetted, industry-leading partners allow us to
                offer the most comprehensive financing on the market.
              </p>
            </div>

            {/* Build Credit */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-[#5BA7F9]/10 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="w-7 h-7 text-[#5BA7F9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Build Business Credit
              </h3>
              <p className="text-gray-600 mb-6">
                Develop your business credit with Dun & Bradstreet, and receive
                complimentary credit consultation from the experts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ZenixDifference;
