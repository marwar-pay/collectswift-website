import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/bbps.png";
import img2 from "../../assets/images/pan.png";
import img3 from "../../assets/images/recharge.png";
import img4 from "../../assets/images/money.png";
import img5 from "../../assets/images/aeps.png";

const servicesData = [
  {
    title: "BBPS",
    content:
      "The Bharat bill payment system is a Reserve Bank of India (RBI) conceptualised system driven by National Payments Corporation of India (NPCI).",
    image: img1,
  },
  {
    title: "PAN Card",
    content:
      "A PAN card is a document that no taxpayer can do without. Besides being compulsory in order to file your Income Tax returns.",
    image: img2,
  },
  {
    title: "Recharge",
    content:
      "ZanithPay currently provides recharge facilities to all leading telecom operators like BSNL, Reliance-Jio, Airtel, Vodafone, Idea, Telenor, etc.",
    image: img3,
  },
  {
    title: "Money Transfer",
    content:
      "We offer high-security instant money transfer API with free API integration. Transfer money online at any time from anywhere in India.",
    image: img4,
  },
  {
    title: "AEPS",
    content:
      "AEPS enables secure payments using Aadhaar number and biometric authentication.",
    image: img5,
  },
];

const Service = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-white opacity-40 blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">
          🚀 Our B2B Services
        </h1>
        <div className="w-16 mx-auto mb-8 border-b-4 border-blue-500"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 162, 255, 0.3)" }}
              className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-200 backdrop-blur-lg transition-all"
            >
              {/* Service Image */}
              <div className="w-24 h-24 mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Service Title & Description */}
              <h2 className="text-2xl font-semibold text-blue-600 mt-4">{service.title}</h2>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{service.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
