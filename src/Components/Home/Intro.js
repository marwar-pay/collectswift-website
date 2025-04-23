import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import about2 from '../../assets/images/about2.jpg';

function Intro() {
  const [text, setText] = useState('');
  const fullText = "At CollectSwift, we power businesses with secure, fast, and scalable payment gateway solutions. Whether you're accepting online payments via UPI, net banking, or E-wallets, our robust infrastructure ensures seamless transactions across all platforms. real-time settlements, and developer-friendly APIs, CollectSwift helps you simplify payment processing and elevate your customers’ checkout experience. Join thousands of businesses across India in transforming the way payments are made—swiftly and securely.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-transparent opacity-20 animate-pulse"></div>
      
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0 relative z-10" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slideInLeft">
        Smarter Payment Solutions by CollectSwift
        </h1>
        <p className="pt-10 text-gray-700 animate-fadeIn delay-200">
          {text}
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 animate-bounce delay-500">
          Get Started
        </button>
      </div>

      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end relative z-10" data-aos="fade-down">
        <Image
          src={about2}
          alt="Financial Platform"
          width={500}
          height={300}
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-zoomIn"
          data-aos="flip-left"
        />
      </div>
    </div>
  );
}

export default Intro;
// import Image from 'next/image';
// import React from 'react';
// import about from '../../assets/images/about.png'

// function Intro() {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-between p-6">
//       <div className="w-full sm:w-1/2 mb-4 sm:mb-0" data-aos="fade-up">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           All Your Financial Needs, Wrapped Up in One Easy Platform!
//         </h1>
//         <p className="pt-10">Better Services Provide by collectswift is world`s best leading online service provider in India. We at collectswift provide Aadhaar Enabled Payment System (AEPS), Domestic Money Transfer, Recharge (Mobile, Dth, Data Card), Bill Payment System (Electricity, Landline, Mobile Bill Payment) of all leading service provider at unbel ievably lowest price. Now you don’t have to stand in queue for all Recharge, Bill Payment, Aeps and Money Transfer, You Can pay easily all these payments with collectswift store services in India. You can transfer money from any place to any bank account at any time in India using collectswift Store domestic money transfer service.</p>
//       </div>

//       <div className="w-full sm:w-1/2 pl-20" data-aos="fade-down">
//         {/* <img 
//           src="/images/about.png" 
//           alt="Financial Platform" 
//           className=" rounded-lg" style={{width:'70%'}} 
//         /> */}
//         <Image
//           src={about}
//           alt="Financial Platform"

//           width={500}
//           height={300}
//           className=" rounded-lg" style={{ width: '70%' }}
//           data-aos="flip-left"
//         />

//       </div>
//     </div>
//   );
// }

// export default Intro;
