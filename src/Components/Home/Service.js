// pages/services.js
import React from 'react';
import img1 from '../../assets/images/bbps.png';
import img2 from '../../assets/images/pan.png';
import img3 from '../../assets/images/recharge.png';
import img4 from '../../assets/images/money.png';
import img5 from '../../assets/images/aeps.png';
import Image from 'next/image';

const servicesData = [
  {
    title: 'BBPS',
    content: 'The Bharat bill payment system is a Reserve Bank of India (RBI) conceptualised system driven by National Payments Corporation of India (NPCI).',
    image: img1,
  },
  {
    title: 'PAN Card',
    content: 'A PAN card is a document that no taxpayer can do without. Besides being compulsory in order to file your Income Tax returns.',
    image: img2,
  },
  {
    title: 'Recharge',
    content: 'ZanithPay currently provide Recharge facility to all Leading telecom operator mobile users Like BSNL, Reliance-Jio, Airtel, Vodafone, Idea, Telenor . . .',
    image: img3,
  },
  {
    title: 'Money Transfer',
    content: 'We offer high security instant money transfer API with free API integration. Use our API and transfer online money at any time from anywhere in India.',
    image: img4,
  },
  {
    title: 'AEPS',
    content: 'AEPS can send and receive payment from anywhere and anytime using aadhaar number and thumb impression.',
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
