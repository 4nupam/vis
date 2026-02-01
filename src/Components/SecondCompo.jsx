import { motion } from "framer-motion";
import CTA from "./Button/CTA";
import fallbackImage from "../utils/second.svg";
import Linkedin from "../utils/LinkedIn.svg";
import insta from "../utils/Insta.svg";
import x from "../utils/X.svg";
import compass from "../utils/Compass.svg";

export default function SecondCompo({ item = {} }) {
  const socialData = [Linkedin, insta, x, compass];

  // Container for staggered storytelling
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      style={{ background: item.color || "#FEF9C3" }}
      className="main px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="title text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl"
          variants={itemVariants}
        >
          {item.title || "Effortlessly organize contacts"}
        </motion.h2>

        {/* Content Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
          {/* Left content */}
          <motion.div className="para space-y-4 max-w-md" variants={itemVariants}>
            <p className="text-lg text-gray-800 font-light">{item.para}</p>

            {item.socialMedia && (
              <div className="flex flex-wrap items-center gap-3">
                {socialData.map((e, index) => (
                  <motion.img
                    key={index}
                    src={e}
                    alt=""
                    className="bg-white image rounded-full px-2 py-2"
                    variants={socialVariants}
                  />
                ))}
                <motion.span
                  className="font-light text-[gray-100]"
                  variants={socialVariants}
                >
                  +999
                </motion.span>
              </div>
            )}

            <CTA bg={false} name={item.btn || "Explore contact sync"} />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="image relative w-full flex justify-end items-end"
            variants={imageVariants}
          >
            <img
              src={item.image || fallbackImage}
              alt="Contact organization illustration"
              className="w-full h-96 max-w-none translate-y-2"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}