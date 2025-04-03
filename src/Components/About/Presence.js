import Image from "next/image";
import img1 from "../../assets/images/map.png";

const OurPresence = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src={img1}
              alt="Our Global Presence"
              width={500}
              height={300}
              className="w-full rounded-lg shadow-lg"
              data-aos="zoom-in"
            />
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Our Presence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
          CollectSwift Pvt Ltd provides seamless fintech solutions, including Recharge, Money Transfer, 
          Bus & Flight Booking, and more – ensuring secure and hassle-free transactions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our B2B services ensure high margins and additional benefits across
            multiple telecom and DTH operators, making it easier for businesses
            to grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
