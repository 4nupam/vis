import { useEffect, useRef } from "react";
import gsap from "gsap";
import CTA from "./CTA";
import fallbackImage from "../utils/second.svg";
import Linkedin from "../utils/LinkedIn.svg";
import insta from "../utils/Insta.svg";
import x from "../utils/X.svg";
import compass from "../utils/Compass.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SecondCompo({ item = {} }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
gsap.registerPlugin(ScrollTrigger);
  const Data = [Linkedin, insta, x, compass];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from(textRef.current, {
        y: 40,
        opacity: 0,
      }).from(
        imgRef.current,
        {
          y: 80,
          opacity: 0,
        },
        "-=0.4",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: item.color || "#FEF9C3" }}
      className="px-6 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title — Full width */}
        <h2
          ref={textRef}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl"
        >
          {item.title || "Effortlessly organize contacts"}
        </h2>

        {/* Content Row */}
        <div className="mt-12 grid grid-cols-1 h-full items-start justify-start md:grid-cols-2">
          {/* Left content */}
          <div className="space-y-2 max-w-md">
            <p className="text-lg text-gray-800 font-light">
              {item.para ||
                "Centralize and sync all your contacts and interactions in one place, because context is key."}
            </p>

            {item.socialMedia === true ? <div className="flex flex-wrap items-center gap-3 ">
                {Data?.map((e,index)=>(
                    <img src={e} key={index} alt="" className="bg-white rounded-full px-2 py-2"/>
                ))}
                <span className="font-light text-[gray-100]">+999</span>
            </div> : ""}

            <CTA bg={false} name={item.btn || "Explore contact sync"} />
          </div>
          {/* Right Image — bottom aligned & bigger */}
          <div
            ref={imgRef}
            className="relative w-full flex justify-end items-end"
          >
            <img
              src={item.image || fallbackImage}
              alt="Contact organization illustration"
              className="w-full h-96 max-w-none translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
