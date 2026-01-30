import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRocket, FaHandsHelping } from "react-icons/fa";
import { IoTrendingUp, IoBagSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import image from "../utils/firstComponent.svg";
import CTA from "./CTA";

export default function FirstComponent() {
  const containerRef = useRef(null);
  const pillsRef = useRef([]);

  const Data = [
    { id: 1, name: "sales", color: "#b4dfc4", icon: <FaRocket /> },
    {
      id: 2,
      name: "recruiting",
      color: "#e3ccf4",
      icon: <IoBagSharp />,
    },
    {
      id: 3,
      name: "fundraising",
      color: "#ffcca7",
      icon: <AiFillDollarCircle />,
    },
    {
      id: 4,
      name: "partnerships",
      color: "#c6d4f9",
      icon: <FaHandsHelping />,
    },
    {
      id: 5,
      name: "investing",
      color: "#f3c6e2",
      icon: <IoTrendingUp />,
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        pillsRef.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.5,
        },
        "-=0.3",
      )
      .from(
        ".hero-cta",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.4,
        },
        "-=0.2",
      )
      .from(
        ".hero-image",
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3",
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full px-6 py-20 flex flex-col items-center gap-16"
    >
      {/* HERO TOP */}
      <div className="flex items-end justify-between w-full max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="hero-title text-4xl font-bold leading-tight">
            All-in-one CRM,
            <br />
            <span className="font-normal">
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
                className="flex items-center gap-2  px-4 py-2 rounded-full text-sm font-medium"
              >
                {e.icon}
                {e.name}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cta">
          <CTA name="Try for free" />
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="hero-image w-full max-w-6xl overflow-hidden">
        <img src={image} alt="CRM Preview" className="w-full" />
      </div>
    </section>
  );
}
