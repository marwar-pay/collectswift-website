import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const News = () => {
  return (
    <section className="footer-t bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="footer-one__top">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
            <div className="xl:col-span-1 relative">
              {/* Blue bar before text */}
              <div className="absolute top-1 left-0 bottom-1 w-1 bg-blue-500"></div>
              <div className="footer-one__top-text pl-6">
                <h2 className="text-2xl font-bold text-black mb-2">Subscribe to our newsletter</h2>
                <p className="text-gray-600">Get the latest news and other tips</p>
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="footer-one__top-form">
                <form className="subscribe-form flex items-center space-x-4">
                  <div className="input-box flex-grow">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md flex items-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
