import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRocket, FaHandsHelping } from "react-icons/fa";
import { IoTrendingUp, IoBagSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import image from "../utils/firstComponent.svg";
import Star from "../utils/visStar.svg";
import Chrome from "../utils/visChrome.svg";
import Product from "../utils/visProduct.svg";
import Google from "../utils/visGoogle.svg";
import Tick from "../utils/Tick.svg"
import CTA from "./Button/CTA";
import ReviewComponent from "./ReviewComponent";

export default function FirstComponent() {
  const containerRef = useRef(null);
  const pillsRef = useRef([]);

  const Data = [
    { id: 1, name: "sales", color: "#b4dfc4", icon: <FaRocket /> },
    { id: 2, name: "recruiting", color: "#e3ccf4", icon: <IoBagSharp /> },
    {
      id: 3,
      name: "fundraising",
      color: "#ffcca7",
      icon: <AiFillDollarCircle />,
    },
    { id: 4, name: "partnerships", color: "#c6d4f9", icon: <FaHandsHelping /> },
    { id: 5, name: "investing", color: "#f3c6e2", icon: <IoTrendingUp /> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-title", { y: 24, opacity: 0, duration: 0.7 })
        .from(
          pillsRef.current,
          { y: 16, opacity: 0, stagger: 0.1, duration: 0.4 },
          "-=0.35",
        )
        .from(
          ".hero-cta",
          { y: 10, opacity: 0, scale: 0.96, duration: 0.3 },
          "-=0.25",
        )
        .from(
          ".hero-image",
          { y: 20, opacity: 0, scale: 0.97, duration: 0.8 },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePillEnter = (el) =>
    gsap.to(el, { y: -4, scale: 1.05, duration: 0.25, ease: "power2.out" });

  const handlePillLeave = (el) =>
    gsap.to(el, { y: 0, scale: 1, duration: 0.25, ease: "power2.inOut" });

  

  return (
    <section
      ref={containerRef}
      className="w-full px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center gap-10"
    >
      {/* HERO TOP */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full max-w-6xl gap-8">
        <div className="max-w-3xl">
          <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            All-in-one CRM,
            <br />
            <span className="font-normal block">
              one tool for all your relationships:
            </span>
          </h1>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {Data.map((e, i) => (
              <div
                key={e.id}
                ref={(el) => (pillsRef.current[i] = el)}
                style={{ backgroundColor: e.color }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer will-change-transform"
                onMouseEnter={(ev) => handlePillEnter(ev.currentTarget)}
                onMouseLeave={(ev) => handlePillLeave(ev.currentTarget)}
              >
                {e.icon}
                {e.name}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hero-cta w-full md:w-auto">
          <CTA name="Try for free" />
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="hero-image w-full max-w-6xl overflow-hidden rounded-xl">
        <img
          src={image}
          alt="CRM Preview"
          className="w-full h-auto will-change-transform"
        />
      </div>

      {/* Review Part */}
      <div className="flex gap-4 flex-wrap">
        <ReviewComponent rating={4.2} image={Chrome} />
        <ReviewComponent rating={4.2} image={Product} />
        <ReviewComponent  image={Google} logo={Tick}/>
      </div>
    </section>
  );
}
