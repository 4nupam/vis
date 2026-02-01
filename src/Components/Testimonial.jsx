import { motion } from "framer-motion";
import Data from "../DataStore/Testimonial.json";
import Card from "../Components/Card/TestimonialCard";

export default function Testimonial() {
  // Container variant for staggered animations
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }, // stagger each card
  };

  // Card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="px-4 py-24 bg-neutral-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        >
          Testimonial
        </motion.h2>

        {/* Bento Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            auto-rows-[minmax(220px,auto)]
            gap-6
          "
        >
          {/* HERO — big left */}
          <motion.div className="lg:col-span-1 lg:row-span-1" variants={cardVariants}>
            <Card data={Data[0]} variant="hero" />
          </motion.div>

          {/* Tall top-middle */}
          <motion.div className="lg:row-span-1" variants={cardVariants}>
            <Card data={Data[1]} />
          </motion.div>

          {/* Small top-right */}
          <motion.div variants={cardVariants}>
            <Card data={Data[2]} />
          </motion.div>

          {/* Small bottom-left */}
          <motion.div className="lg:row-span-[1/2]" variants={cardVariants}>
            <Card data={Data[3]} />
          </motion.div>

          {/* Wide bottom-middle */}
          <motion.div className="lg:col-span-1" variants={cardVariants}>
            <Card data={Data[4]} />
          </motion.div>

          {/* Tall bottom-right */}
          <motion.div className="lg:row-span-1" variants={cardVariants}>
            <Card data={Data[5]} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}