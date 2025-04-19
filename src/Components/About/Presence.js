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
          At CollectSwift Pvt Ltd, we specialize in delivering cutting-edge fintech solutions designed to simplify and secure financial transactions. Our platform supports a wide range of services including instant money transfers, utility payments, recharges, and more — all with a strong focus on speed, reliability, and user convenience.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          Our B2B services are built to scale, offering high margins, exclusive partner benefits, and multi-user support — making it easier than ever for businesses to expand their offerings, increase profitability, and serve their customers with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
