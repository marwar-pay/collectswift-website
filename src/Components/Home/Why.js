import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faPlug, faBolt, faHeadset, faGlobe, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

function WhyChooseUs() {
  return (
    <section className="text-center bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <hr className="w-16 mx-auto my-4 border-b-4 border-blue-500" />
        <p className="text-lg text-gray-700 mb-8">Our features that make us stand out</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: faShieldAlt, title: "Safe and Secure", description: "Recognized by the Govt. of India, ensuring safety and security." },
  { icon: faPlug, title: "Easy Integration", description: "Signup and go with easy integration for your web and mobile applications." },
  { icon: faBolt, title: "Fast Response", description: "RESTful APIs delivering the fastest response over web and mobile." },
  { icon: faHeadset, title: "24/7 Support", description: "Our dedicated customer service team is available 24x7." },
  { icon: faGlobe, title: "All Platforms", description: "Supports all technologies and platforms seamlessly." },
  { icon: faMoneyBillWave, title: "High Commission", description: "Offering high commissions and margins for all agents." },
];

export default WhyChooseUs;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShieldAlt, faPlug, faBolt, faHeadset, faGlobe, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';


// function WhyChooseUs() {
//   return (
//     <section className="text-center bgclrbc my-16 py-12">
//       {/* Main Heading */}
//       <h2 className="text-3xl font-bold">Why Choose Us</h2>
//       <hr className="w-16 mx-auto my-4 border-b-2 border-black" />
//       <p className="text-lg mb-12">Our features that make Us Different</p>
//       <p>Having worked on numerous projects, we at ZanithPay have gained unmatched business and technological expertise. We have built a large pool of knowledge that we apply to deliver solutions that meet client`s needs, expectation and budget.</p>

//       {/* Feature Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 mt-20" >
//         {/* Feature 1 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg ">
//           <div className="icon-container w-16 h-16 rounded-full bg-blue-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">Safe and Secure</h3>
//           <p>
//             Our Company is recognized in the Startup India program by the Govt. of India, so it’s Safe and Secure.
//           </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg">
//           <div className="icon-container w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faPlug} className="text-green-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">Easy Integration</h3>
//           <p>
//             Signup and go with easy integration features for your web and mobile applications.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg">
//           <div className="icon-container w-16 h-16 rounded-full bg-yellow-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faBolt} className="text-yellow-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">Fast Response</h3>
//           <p>
//             We use RESTful APIs which deliver the fastest response over requests made from web or mobile devices.
//           </p>
//         </div>

//         {/* Feature 4 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg">
//           <div className="icon-container w-16 h-16 rounded-full bg-red-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faHeadset} className="text-red-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">24/7 Support</h3>
//           <p>
//             Our customer service is best-in-class and committed to serving you 24x7 for your queries and questions.
//           </p>
//         </div>

//         {/* Feature 5 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg">
//           <div className="icon-container w-16 h-16 rounded-full bg-purple-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faGlobe} className="text-purple-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">All Platforms</h3>
//           <p>
//             No worries about the technology or platform your application is built on—we support all of them.
//           </p>
//         </div>

//         {/* Feature 6 */}
//         <div className="feature-box relative col-span-1 text-center bg-white p-6 rounded-lg shadow-lg">
//           <div className="icon-container w-16 h-16 rounded-full bg-teal-100 mx-auto flex items-center justify-center mb-4">
//             <FontAwesomeIcon icon={faMoneyBillWave} className="text-teal-600 text-3xl" />
//           </div>
//           <h3 className="text-xl font-semibold">High Commission</h3>
//           <p>
//             We provide high commissions and margins for all agents across India.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;
