import gsap from "gsap";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa"; // right-aligned arrow

export default function CTA({ name, bg = false }) {
  const btnRef = useRef(null);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power1.out",
      backgroundColor: bg ? undefined : "rgba(255,255,255,0.1)", // subtle hover for outlined
      borderColor: bg ? undefined : "#ffffff",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power1.out",
      backgroundColor: bg ? undefined : "transparent",
      borderColor: bg ? undefined : "black",
    });
  };

  return (
    <button
      ref={btnRef}
      className={`flex items-center gap-2 ${
        bg
          ? "bg-black text-white border-white px-5 py-2"
          : "bg-transparent border border-black text-black px-5 py-2"
      } rounded-2xl font-medium transition-colors duration-300`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {name} <FaArrowRight className="ml-2 text-sm" />
    </button>
  );
}