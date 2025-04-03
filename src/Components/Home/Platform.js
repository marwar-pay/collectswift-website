// // components/PlatformSection.js
import Image from 'next/image';
import img from '../../assets/images/android.png';
import img1 from '../../assets/images/web.png';
import img2 from '../../assets/images/sms.png';

const PlatformSection = () => {
  return (
    <div className="platform-section py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="services-box bg-white rounded-lg shadow-lg p-6 text-center border border-blue-200">
            <div className="services-icon mb-4 flex justify-center">
              <Image src={img1} alt="Web Development" width={64} height={64} />
            </div>
            <h5 className="services-title text-lg font-semibold mb-2 text-blue-600">Web Development</h5>
            <p className="text-gray-700">Recharge using our Web Application with just a few clicks. Secure wallet options available.</p>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center justify-center">
                <span>Read More</span>
              </a>
            </div>
          </div>
          <div className="services-box bg-white rounded-lg shadow-lg p-6 text-center border border-blue-200">
            <div className="services-icon mb-4 flex justify-center">
              <Image src={img} alt="Android App" width={64} height={64} />
            </div>
            <h5 className="services-title text-lg font-semibold mb-2 text-blue-600">Android App</h5>
            <p className="text-gray-700">Recharge with ease using our Android Application. Secure and user-friendly experience.</p>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center justify-center">
                <span>Read More</span>
              </a>
            </div>
          </div>
          <div className="services-box bg-white rounded-lg shadow-lg p-6 text-center border border-blue-200">
            <div className="services-icon mb-4 flex justify-center">
              <Image src={img2} alt="SMS" width={64} height={64} />
            </div>
            <h5 className="services-title text-lg font-semibold mb-2 text-blue-600">SMS</h5>
            <p className="text-gray-700">Recharge offline using our SMS Service. Simple and convenient for all users.</p>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center justify-center">
                <span>Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;



// import Image from 'next/image';
// import img from '../../assets/images/android.png';
// import img1 from '../../assets/images/web.png';
// import img2 from '../../assets/images/sms.png';
// const PlatformSection = () => {
//   return (
//     <div className="platform-section py-16">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="services-box bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="services-icon mb-4">
//               <Image src={img1}alt="Web Development" width={64} height={64} />
//             </div>
//             <h5 className="services-title text-lg font-semibold mb-2">Web Development</h5>
//             <p className="mb-4">You can recharge using Web Application. Recharge easily in few clicks. Choose from secure wallet options provided by Recharge Demo.</p>
//             <div className="btn-01">
//               <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
//                 <span>Read More</span>
//                 <i className="lni lni-arrow-right ml-1"></i>
//               </a>
//             </div>
//           </div>
//           <div className="services-box bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="services-icon mb-4">
//               <Image src={img} alt="Android App" width={64} height={64} />
//             </div>
//             <h5 className="services-title text-lg font-semibold mb-2">Android App</h5>
//             <p className="mb-4">You can recharge using Android Application. Recharge easily in few clicks. Choose from secure wallet options provided by Recharge Demo.</p>
//             <div className="btn-01">
//               <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
//                 <span>Read More</span>
//                 <i className="lni lni-arrow-right ml-1"></i>
//               </a>
//             </div>
//           </div>
//           <div className="services-box bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="services-icon mb-4">
//               <Image src={img2} alt="SMS" width={64} height={64} />
//             </div>
//             <h5 className="services-title text-lg font-semibold mb-2">SMS</h5>
//             <p className="mb-4">You can recharge using SMS Offline Service. Recharge easily in few clicks. Choose from secure wallet options provided by Recharge Demo.</p>
//             <div className="btn-01">
//               <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
//                 <span>Read More</span>
//                 <i className="lni lni-arrow-right ml-1"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlatformSection;
