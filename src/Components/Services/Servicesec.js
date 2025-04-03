import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../../assets/images/flight_booking_1.png";
import img2 from "../../assets/images/aadharcard.png";
import img3 from "../../assets/images/Money-Transfer-p.png";
import img4 from "../../assets/images/postpaid.png";

const services = [
  {
    title: "Flight Ticket Booking",
    description:
      "Seamless search experience, lower fares, and a simple booking process make our portal highly demanding among distributors and agents.",
    extra: "Planning a trip? Book flights effortlessly with us!",
    points: ["Single Journey", "Round Trip Journey", "Connecting Flights"],
    image: img1,
  },
  {
    title: "Aadhar Enabled Payment System (AEPS)",
    description:
      "Offer banking services using just the customer’s fingerprint.",
    extra: "AEPS allows financial transactions using Aadhaar and biometrics.",
    points: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    image: img2,
  },
  {
    title: "Direct Money Transfer",
    description:
      "Send money instantly across India with just an account number and IFSC code.",
    extra: "Fast, secure, and hassle-free transactions.",
    image: img3,
  },
  {
    title: "Recharge (Prepaid & Postpaid)",
    description:
      "Recharge or pay bills with discounts credited directly to your wallet.",
    extra: "Quick and seamless mobile recharges and bill payments.",
    points: ["Prepaid Recharge", "Postpaid Bill Payments"],
    image: img4,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-6" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-lg text-gray-600 tracking-wider uppercase">Services</span>
          <h2 className="text-4xl font-extrabold text-gray-800">
            What We <span className="text-blue-600">Offer</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row items-center bg-white bg-opacity-90 backdrop-blur-xl shadow-lg rounded-xl overflow-hidden p-6 border border-gray-200 hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
                <p className="text-sm text-gray-500 mt-2">{service.extra}</p>

                {service.points && (
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
