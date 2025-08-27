import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="bg-dark text-white pt-24 md:pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gold">Make Every Event</span> Memorable
          </h1>
          <p className="text-grayText text-lg md:text-xl max-w-lg">
            We design unforgettable experiences tailored for you — from weddings and parties to corporate events. 
            Let us bring your vision to life with elegance and creativity.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="bg-gold text-dark px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-500 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-gold px-6 py-3 rounded-xl font-semibold hover:bg-gold hover:text-dark transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/images/hero2.jpg" 
            alt="Event Illustration"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 to-transparent rounded-2xl blur-3xl -z-10"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 -left-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}

export default Hero;
