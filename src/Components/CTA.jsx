import gsap from "gsap";
import { useRef } from "react";

export default function CTA({ name, bg = true }) {
  const btnRef = useRef(null);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  return (
    <button
      ref={btnRef}
      className={`${
        bg
          ? "bg-black px-4 py-2 text-white"
          : "bg-transparent border border-black px-3 py-1 text-black"
      } rounded-2xl  transition-colors`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {name}
    </button>
  );
}
