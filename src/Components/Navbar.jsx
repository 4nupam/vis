import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../utils/vislogo.svg";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CTA from "./Button/CTA";

export default function Navbar() {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const NavData = [
    { id: 1, name: "Products", dropdown: true },
    { id: 2, name: "Templates", dropdown: false },
    { id: 3, name: "Pricing", dropdown: false },
    { id: 4, name: "Resources", dropdown: true },
  ];

  /* ---------------------------
     Initial Navbar Animation
  --------------------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  /* ---------------------------
     Hover animations (desktop)
  --------------------------- */
  const handleMouseEnter = (el) => {
    gsap.to(el.querySelector(".underline"), {
      scaleX: 1,
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(el.querySelector(".arrow"), {
      rotate: 180,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el.querySelector(".underline"), {
      scaleX: 0,
      duration: 0.25,
      ease: "power2.inOut",
    });

    gsap.to(el.querySelector(".arrow"), {
      rotate: 0,
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  /* ---------------------------
     Mobile Menu Animation
  --------------------------- */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="w-full px-6 py-4 flex items-center justify-between"
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <img src={Logo} alt="Logo" className="w-10" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {NavData.map((item) => (
            <div
              key={item.id}
              className="nav-item relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <span className="text-gray-700">{item.name}</span>

              {item.dropdown && (
                <span className="arrow inline-block">
                  <FaAngleDown />
                </span>
              )}

              <span className="underline absolute left-0 -bottom-1 h-0.5 w-full bg-black origin-left scale-x-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <span className="nav-item cursor-pointer">Get a Demo</span>
        <span className="nav-item cursor-pointer">Log in</span>
        <CTA name="Try for free" />
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden z-12 text-xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <IoClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="absolute top-1 left-0 w-full z-10 bg-white overflow-hidden md:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {NavData.map((item) => (
            <div key={item.id} className="cursor-pointer">
              {item.name}
            </div>
          ))}

          <span>Get a Demo</span>
          <span>Log in</span>
          <CTA name="Try for free" />
        </div>
      </div>
    </nav>
  );
}
