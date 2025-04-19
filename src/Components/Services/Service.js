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
    title: "Reporting and Analytics",
    content:
      "We are offer dashboards and reporting tools that provide insights into sales performance, transaction history, and customer behavior, aiding in business decision-making.",
    image: img1,
  },
  // {
  //   title: " Integration and Developer Tools",
  //   content:
  //     "They offer APIs, SDKs, and plugins to integrate payment processing into websites, mobile apps, and e-commerce platforms, facilitating seamless transactions.",
  //   image: img2,
  // },
  {
    title: "Multi-Channel Payment Acceptance",
    content:
      "collectswift currently provides recharge facilities to all leading telecom operators like BSNL, Reliance-Jio, Airtel, Vodafone, Idea, Telenor, etc.",
    image: img3,
  },
  {
    title: "Money Transfer",
    content:
      "We offer high security instant money transfer API with free API integration. Use our API and transfer online money at any time from anywhere in India.",
    image: img4,
  },
  {
    title: "Security and Fraud Prevention",
    content:
      "Encryption: Securing data during transmission.Monitoring transactions for suspicious activity.",
    image: img5,
  },
];

const Service = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          🚀 Our B2B Services
        </h1>
        <div className="w-24 mx-auto mb-12 border-b-4 border-blue-500"></div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-400"
            >
              <div className="w-20 h-20 mx-auto mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-xl font-bold text-blue-600 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
