import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Sarah Ahmed",
            review:
              "Amazing event management! Everything was perfectly organized. Highly recommended!",
          },
          {
            id: 2,
            name: "Koushik Ahammed",
            review:
              "Their digital marketing service boosted my sales by 40% in just 3 months.",
          },
          {
            id: 3,
            name: "Moon Manha",
            review:
              "As a restaurant owner, their consulting saved me from early mistakes. True professionals!",
          },
        ];
  });

  const [current, setCurrent] = useState(0);
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    setReviews([
      ...reviews,
      { id: reviews.length + 1, ...newReview },
    ]);
    setNewReview({ name: "", review: "" });
  };

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="bg-dark text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gold">Customer Reviews</h2>
        <p className="text-grayText mt-2">
          See what our clients say about us
        </p>
      </div>

      {/* Review Carousel */}
      <div className="relative max-w-2xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg italic mb-4">
              "{reviews[current].review}"
            </p>
            <h4 className="text-gold font-semibold">
              - {reviews[current].name}
            </h4>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-dark transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-dark transition"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Review Submission Form */}
      <div className="mt-12 max-w-xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Write Your Review</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white placeholder-grayText focus:outline-none focus:ring-2 focus:ring-gold"
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
          />
          <textarea
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white placeholder-grayText focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Your Review"
            value={newReview.review}
            onChange={(e) =>
              setNewReview({ ...newReview, review: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-accent transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerReviews;
