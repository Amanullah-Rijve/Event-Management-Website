import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-dark text-white py-16 px-6 md:px-12 lg:px-20 space-y-24"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/public/images/about3.jpg" 
            alt="Our Story"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </motion.div>

        {/* Text Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Founded with a passion for excellence,{" "}
            <span className="text-gold font-semibold">CPB</span> has grown
            into one of the most trusted names in event management. From intimate
            gatherings to large-scale productions, we deliver experiences that
            people remember.
          </p>
          <a
            href="#services"
            className="bg-gold text-dark px-6 py-3 rounded-lg shadow-md font-medium hover:bg-yellow-500 transition"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We combine creativity, innovation, and precision planning to bring
            your ideas to life. With a dedicated team of experts,{" "}
            <span className="text-gold font-semibold">your vision becomes
            reality</span> — stress-free and stunning every time.
          </p>
          <p className="text-gray-400 mb-6">
            From concept to execution, we ensure every detail is handled with
            care, professionalism, and elegance.
          </p>
          <a
            href="#contact"
            className="bg-gold text-dark px-6 py-3 rounded-lg shadow-md font-medium hover:bg-yellow-500 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Image Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/public/images/about2.jpg" 
            alt="Why Choose Us"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
