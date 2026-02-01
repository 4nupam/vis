import gsap from "gsap";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FooterCta({ name, bg = true }) {
  const btnRef = useRef(null);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.03,
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
      type="button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        group relative inline-flex items-center justify-center
        rounded-4xl px-10 py-4
        font-medium text-sm
        transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-black
      `}
    >
      {/* Main content */}
      <span
        className={`
          relative z-10 flex items-center gap-2
          rounded-2xl px-6 py-3
          transition-all duration-300
          ${
            bg
              ? "bg-white text-black group-hover:bg-neutral-100"
              : "bg-black text-white border border-white/20 group-hover:bg-neutral-900"
          }
        `}
      >
        {name} <FaArrowRight className="ml-1 text-sm" />
      </span>

      {/* Subtle hover glow */}
      <span
        aria-hidden
        className={`
          absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-300
          ${
            bg
              ? "bg-white/20 group-hover:opacity-50"
              : "bg-white/10 group-hover:opacity-30"
          }
        `}
      />
    </button>
  );
}