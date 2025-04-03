import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faIdCard, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import img1 from '../../assets/images/about2.jpg';

const Agent = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-10">
      <div className="container mx-auto">
        <div className="app-wrapper flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="sec-heading">
              <h2 className="text-4xl font-bold text-gray-800 animate-fadeIn">Are You Ready?</h2>
              <h5 className="text-xl mt-2 text-gray-600 animate-slideIn">Become an Agent Today</h5>

              <div className="mt-10 space-y-8">
                {[  
                  { icon: faDownload, title: 'Download CollectSwift App', desc: 'Download & Install CollectSwift App from Google Play Store', color: 'bg-blue-500' },
                  { icon: faIdCard, title: 'Update Your KYC', desc: 'Register and Upload KYC (you can do e-KYC for instant activation – biometric device required)', color: 'bg-green-500' },
                  { icon: faMoneyBillTransfer, title: 'Start Transacting', desc: 'Start Earning', color: 'bg-purple-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 bg-white">
                    <div className={`w-16 h-16 flex items-center justify-center ${item.color} rounded-full text-white shadow-md`}> 
                      <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900 animate-fadeIn">{item.title}</h4>
                      <p className="text-sm text-gray-600 animate-slideIn">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center">
            <div className="mobile-overview w-full max-w-md p-6 rounded-2xl shadow-xl bg-white transform transition-all duration-500 hover:scale-105 animate-fadeInUp">
              <Image 
                src={img1} 
                alt="Contact Us" 
                width={500}  
                height={300}  
                className="w-full h-auto rounded-xl shadow-md" 
                data-aos="flip-left" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent;





