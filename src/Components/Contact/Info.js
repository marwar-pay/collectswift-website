import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../assets/images/contact-us.png";

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-white/50 backdrop-blur-lg shadow-lg rounded-xl">
          {[
            { icon: faMapLocationDot, title: "Office Address", content: "A-12 2nd Floor Shree Kanhaiya Mansion, Acharya Vino Vabhave Nagar, Jaipur, Rajasthan, 302021" },
            { icon: faPhoneVolume, title: "Call Us", content: "+91-9509494310" },
            { icon: faEnvelope, title: "Email Us", content: "support@collectswift.com", link: "mailto:support@collectswift.com" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl text-blue-600 mr-4">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h5>
                {item.link ? (
                  <a href={item.link} className="text-blue-600 hover:underline">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={img1} alt="Contact Us" width={500} height={300} className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-white/60 backdrop-blur-lg shadow-lg rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Get In Touch</h2>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative mt-6">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter subject"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="relative mt-6">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input h-32 resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-all hover:bg-blue-700"
              >
                Send Message <i className="far fa-paper-plane ml-2"></i>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Light Glow Effect */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      {/* Tailwind Styles */}
      <style jsx>{`
        .form-input {
          width: 100%;
          border: none;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.6);
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
          outline: none;
          font-size: 16px;
          transition: 0.3s ease-in-out;
        }

        .form-input:focus {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default Contact;
