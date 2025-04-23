// pages/services.js
import React from 'react';
import img1 from '../../assets/images/bbps.jpeg';
import img2 from '../../assets/images/pan.png';
import img3 from '../../assets/images/Multi.jpeg';
import img4 from '../../assets/images/money.png';
import img5 from '../../assets/images/Merchant.png';
import Image from 'next/image';

const servicesData = [
  {
<<<<<<< HEAD
    title: 'Payment Processing',
    content: 'Facilitate seamless transactions with our advanced payment gateway solution, supporting credit/debit cards, UPI, net banking, and digital wallets. Enjoy 99.99% uptime with real-time payment processing and instant settlements.',
    image: img1,
  },
  // {
  //   title: 'Integration and Developer Tools',
  //   content: 'They offer APIs, SDKs, and plugins to integrate payment processing into websites, mobile apps, and e-commerce platforms, facilitating seamless transactions.',
  //   image: img2,
  // },
  {
    title: 'Secure Transactions',
    content: 'Enterprise-grade security with 256-bit SSL encryption and PCI-DSS compliance. Protect transactions with 3D Secure authentication, tokenization, and advanced fraud detection systems.',
    image: img2,
  },
  {
    title: 'API Integration',
    content: 'Easy-to-integrate REST APIs and SDKs for seamless platform integration. Developer-friendly documentation with sandbox environment for testing and customizable checkout experiences.',
    image: img3,
  },
  {
    title: 'Global Payments',
    content: 'Process international payments with multi-currency support across 150+ countries. Features include dynamic currency conversion, cross-border transactions, and SWIFT/SEPA compatibility.',
    image: img4,
  },
  {
    title: 'Merchant Services',
    content: 'Complete merchant management solutions including instant onboarding, smart dashboard analytics, automated reconciliation, and chargeback management. Real-time reporting for all transactions.',
    image: img5,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">Our B2B Services</h1>
        <hr className="w-16 mx-auto my-4 border-b-4 border-blue-500 animate-slideIn" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-gray-100 to-white overflow-hidden rounded-2xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              data-aos="flip-left"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transform transition-all duration-500 hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 animate-fadeInUp delay-200">{service.title}</h2>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed transition-opacity duration-500 opacity-80 hover:opacity-100">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
