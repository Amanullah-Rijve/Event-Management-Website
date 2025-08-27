import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServicesTabs() {
  const services = [
    {
      title: "Event Management",
      tagline: "Transforming Ideas into Memorable Experiences",
      desc: "From high-profile corporate gatherings to product launches, we deliver events that impress and inspire.",
      expertise: [
        "Corporate Conferences & Seminars",
        "Product Launches & Brand Activations",
        "Award Ceremonies & Gala Dinners",
        "A–Z Event Planning, Hosting & Execution",
      ],
      why: "Creative concepts, flawless execution, and on-time delivery.",
      img: "/images/event.jpg", // replace with real image
    },
    {
      title: "Digital Marketing",
      tagline: "Driving Your Brand Forward in the Digital World",
      desc: "We manage, market, and grow your brand with strategies that work.",
      expertise: [
        "Social Media Management (FB, Insta, TikTok, LinkedIn)",
        "Graphic Design & Professional Videography",
        "SEO & Website Development",
        "Complete A–Z Digital Marketing Support",
      ],
      why: "We combine creativity, data, and strategy to deliver measurable results.",
      img: "/images/market.jpg",
    },
    {
      title: "Business Organizer & Planner",
      tagline: "From Startup Vision to Operational Success",
      desc: "We guide you through every step of building and running a sustainable business.",
      expertise: [
        "New Business Setup & Registration Guidance",
        "Strategic Planning & Documentation",
        "Licensing, Compliance & Operational Support",
        "Ongoing Mentorship & Management",
      ],
      why: "We stay with you until your business is running smoothly.",
      img: "/images/business.jpg",
    },
    {
      title: "Restaurant Business Adviser",
      tagline: "Expert Guidance for Profitable Food Businesses",
      desc: "Specialized consulting for restaurant success from concept to operations.",
      expertise: [
        "Menu Planning & Concept Development",
        "Kitchen Setup & Workflow Design",
        "Staff Training & Service Excellence Programs",
        "Restaurant Marketing & Customer Retention",
      ],
      why: "We know what makes restaurants thrive and help you achieve it.",
      img: "/images/resturant.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-dark text-white py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full border-2 transition-all ${
                active === i
                  ? "bg-gold text-black border-gold"
                  : "border-gold text-gold hover:bg-gold hover:text-black"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">
                {services[active].tagline}
              </h3>
              <p className="text-gray-300 mb-4">{services[active].desc}</p>
              <h4 className="font-semibold text-white mb-2">Our Expertise:</h4>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {services[active].expertise.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-200">
                <span className="font-semibold text-gold">Why Us?</span>{" "}
                {services[active].why}
              </p>
            </div>

            {/* Image */}
            <motion.img
              src={services[active].img}
              alt={services[active].title}
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ServicesTabs;
