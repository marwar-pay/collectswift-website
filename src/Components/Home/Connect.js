import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img2 from '../../assets/images/img2.png';

export default function Contact() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="lg:w-1/2 w-full p-10">
            <div className="section-head mb-6">
              <h4 className="text-lg text-blue-600 font-semibold uppercase">Contact Us</h4>
              <h2 className="text-3xl font-bold text-gray-900">We Love To Help</h2>
              <p className="text-gray-600 mt-2">Get in touch with us for any queries or assistance.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl mr-4" />
                <p className="text-gray-700 font-medium">
                  A-12 2nd Floor, Shree Kanhaiya Mansion, Vaishali Nagar, Jaipur, Rajasthan, 302021
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-xl mr-4" />
                <a href="mailto:support@collectswift.com" className="text-blue-500 hover:underline font-medium">
                  support@collectswift.com
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600 text-xl mr-4" />
                <a href="tel:+91-9509494310" className="text-blue-500 hover:underline font-medium">
                  +91-9509494310
                </a>
              </div>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full">
            <Image 
              src={img2} 
              alt="Contact Us" 
              width={600}  
              height={400}  
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import img2 from '../../assets/images/img2.png';

// export default function Contact() {
//   return (
//     <section className="">
//       <div className="container mx-auto px-10">
//         <div className="flex flex-wrap items-center">
//           {/* Left Side */}
//           <div className="xl:w-1/2 lg:w-7/12 w-full mb-12 lg:mb-0 animate-fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
//             <div className="section-head">
//               <h4 className="text-lg text-primary bg-primary-light inline-block  font-bold">Contact Us</h4>
//               <hr className="w-20  text-left  border-b-1 border-black mb-4" />
//               <h2 className="text-4xl font-bold">We Love To Help</h2>
//             </div>
//             <div className="contact-info mt-8">
//               <ul className="list-none space-y-4">
//                 <li className="flex items-center">
//                   <FontAwesomeIcon icon={faMapLocationDot} className="text-xl text-red-500 mr-3" />
//                   <p className="mb-0">
//                     <b className="text-black"> A-12 2nd Floor Shree Kanhaiya Mansion, Acharya Vino Vabhave Nagar, Vaishali Nagar, Jaipur, Jaipur, Rajasthan, 302021
//  </b>
//                   </p>
//                 </li>
//                 <li className="flex items-center">
//                   <FontAwesomeIcon icon={faEnvelope} className="text-xl text-blue-500 mr-3" />
//                   <a href="mailto:support@collectswift.com" className="text-primary font-bold">support@collectswift.com</a>
//                 </li>
//                 <li className="flex items-center">
//                   <FontAwesomeIcon icon={faPhoneVolume} className="text-xl text-green-500 mr-3" />
//                   <a href="tel:+91-9509494310" className="text-primary font-bold">+91-9509494310</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Right Side */}
//           <div className="xl:w-1/2 lg:w-5/12 w-full animate-fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
//             <div className="relative">
//             <Image 
//   src={img2} 
//   alt="Contact Us" 

//   width={500}  
//   height={300}  
//   className="w-full h-auto" 
//   data-aos="flip-left" 
// />


//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
