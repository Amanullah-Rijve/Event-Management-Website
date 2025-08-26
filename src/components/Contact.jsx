import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-dark text-white py-16 px-6">
      {/* Floating animated background shapes */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-10 left-10 w-32 h-32 bg-primaryStart rounded-full opacity-30 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-primaryEnd rounded-full opacity-30 blur-2xl"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4 text-gold">Get in Touch</h2>
          <p className="text-lg text-grayText">
            We’d love to hear from you! Reach out for event bookings, inquiries,
            or collaborations.
          </p>

          <div className="space-y-3 text-grayText">
            <p>
              <i className="fa-solid fa-location-dot text-gold mr-2"></i> Kuala
              Lumpur, Malaysia
            </p>
            <p>
              <i className="fa-solid fa-phone text-gold mr-2"></i> +6011-39638206
            </p>
            <p>
              <i className="fa-solid fa-envelope text-gold mr-2"></i>{" "}
              creativeplannersofbd@gmail.com
            </p>
          </div>

          {/* Map */}
          <div className="mt-6 w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.05663978371!2d101.6869!3d3.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362f6f36f7b5%3A0x5b1aa0d93c5d5f6a!2sKuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sbd!4v1697440000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark p-6 rounded-2xl shadow-lg space-y-4 border border-white/10"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white placeholder-grayText focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white placeholder-grayText focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white placeholder-grayText focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button className="w-full py-3 rounded-lg bg-gold text-dark font-semibold">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
