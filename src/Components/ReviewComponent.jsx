import { useRef } from "react";
import gsap from "gsap";
import Star from "../utils/visStar.svg";

function ReviewComponent({ rating, image, logo }) {
  const cardRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -6,
      scale: 1.02,
      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex items-center gap-1 bg-white rounded-xl px-5 py-4 cursor-pointer will-change-transform transition-shadow"
    >
      {/* Left: Logo or Rating */}
      <div className="flex items-center justify-center min-w-12 h-12">
        {logo ? (
          <img src={logo} alt="Brand logo" className="h-8 w-auto object-contain" />
        ) : (
          <span className="text-3xl font-semibold text-gray-900">
            {rating}
          </span>
        )}
      </div>

      {/* Right: Review */}
      <div className="flex items-start flex-col gap-1">
        <img
          src={image}
          alt="Reviewer"
          className="h-5 w-auto object-contain"
        />
        <img src={Star} alt="Rating stars" className="h-4 w-auto" />
      </div>
    </div>
  );
}

export default ReviewComponent;
