import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "CollectSwift has transformed the way I handle payments. Highly recommend!",
    designation: "Business Owner",
  },
  {
    name: "Jane Smith",
    feedback: "Excellent service and support. I couldn’t ask for more!",
    designation: "Freelancer",
  },
  {
    name: "Robert Brown",
    feedback: "Quick and easy integration with my existing systems!",
    designation: "E-commerce Manager",
  },
];

const TestimonialsPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="absolute inset-0 bg-white opacity-40 blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">
          ⭐ What Our Clients Say
        </h1>
        <div className="w-16 mx-auto mb-6 border-b-4 border-blue-500"></div>

        {/* Testimonial Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3500}
          transitionTime={600}
          emulateTouch
          showIndicators={true}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-8 bg-white rounded-xl shadow-xl border border-gray-200 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-600">{testimonial.name}</h3>
              <p className="mt-4 text-lg text-gray-700 italic">{testimonial.feedback}</p>
              <p className="mt-6 text-gray-500 text-sm font-medium">{testimonial.designation}</p>
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;
