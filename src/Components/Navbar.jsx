import gsap from "gsap";
import Logo from "../utils/vislogo.svg";
import { FaAngleDown } from "react-icons/fa6";
import CTA from "./CTA";

export default function Navbar() {
  const NavData = [
    { id: 1, name: "Products", dropdown: true },
    { id: 2, name: "Templates", dropdown: false },
    { id: 3, name: "Pricing", dropdown: false },
    { id: 4, name: "Resources", dropdown: true },
  ];

  const handleMouseEnter = (el) => {
    gsap.to(el.querySelector(".underline"), {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(el.querySelector(".arrow"), {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el.querySelector(".underline"), {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(el.querySelector(".arrow"), {
      rotate: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      {/* Left */}
      <div className="flex items-center gap-6">
        <img src={Logo} alt="Logo" className="w-10" />

        {NavData.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <span className="text-gray-700">{item.name}</span>

            {item.dropdown && (
              <span className="arrow inline-block">
                <FaAngleDown />
              </span>
            )}

            {/* underline */}
            <span className="underline absolute left-0 -bottom-1 h-0.5 w-full bg-black origin-left scale-x-0" />
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">Get a Demo</span>
        <span className="cursor-pointer">Log in</span>

        <CTA name={"Try for free"} />
      </div>
    </nav>
  );
}
