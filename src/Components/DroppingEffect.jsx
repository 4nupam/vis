import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaPhotoVideo,
  FaPodcast,
  FaRobot,
  FaCode,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaMoneyBill
} from "react-icons/fa";
import { createRoot } from "react-dom/client";

const items = [
  { label: "Media", icon: FaPhotoVideo },
  { label: "Podcast", icon: FaPodcast },
  { label: "AI", icon: FaRobot },
  { label: "Development", icon: FaCode },
  { label: "Recruiting", icon: FaUsers },
  { label: "Consulting", icon: FaHandshake },
  { label: "Sales", icon: FaRocket, highlight: "#7CF3C0" },
  { label: "Investing", icon: FaMoneyBill, highlight: "#F5A9FF" }
];

export default function FooterDropNoOverlap() {
  const containerRef = useRef(null);
  const placedItems = useRef([]);
  const MAX_ITEMS = 30;

  useEffect(() => {
    const container = containerRef.current;
    const PILL_HEIGHT = 44;
    const GAP = 8;

    const getSafeY = (x, width) => {
      let y = container.offsetHeight - PILL_HEIGHT - 10;

      placedItems.current.forEach((item) => {
        const overlapX =
          x < item.x + item.width &&
          x + width > item.x;

        if (overlapX && y <= item.y + PILL_HEIGHT) {
          y = item.y - PILL_HEIGHT - GAP;
        }
      });

      return y;
    };

    const dropItem = () => {
      if (placedItems.current.length >= MAX_ITEMS) return;

      const item = items[Math.floor(Math.random() * items.length)];
      const Icon = item.icon;

      const pill = document.createElement("div");
      pill.style.position = "absolute";
      pill.style.top = "-100px";
      pill.style.display = "flex";
      pill.style.alignItems = "center";
      pill.style.gap = "8px";
      pill.style.padding = "8px 14px";
      pill.style.borderRadius = "999px";
      pill.style.border = "1px solid rgba(255,255,255,0.15)";
      pill.style.fontSize = "14px";
      pill.style.whiteSpace = "nowrap";
      pill.style.pointerEvents = "none";
      pill.style.background = item.highlight
        ? item.highlight
        : "rgba(0,0,0,0.6)";
      pill.style.color = item.highlight ? "#000" : "#fff";

      // Icon
      const iconWrap = document.createElement("span");
      iconWrap.style.fontSize = "16px";
      const root = createRoot(iconWrap);
      root.render(<Icon />);

      const text = document.createElement("span");
      text.innerText = item.label;

      pill.appendChild(iconWrap);
      pill.appendChild(text);
      container.appendChild(pill);

      // Measure
      const width = pill.offsetWidth;

      // Random X but safe
      const x = Math.random() * (container.offsetWidth - width - 10);
      const y = getSafeY(x, width);

      pill.style.left = `${x}px`;

      const rotation = gsap.utils.random(-10, 10);
      const scale = gsap.utils.random(0.95, 1.05);

      gsap.fromTo(
        pill,
        { y: -100, rotation, scale },
        {
          y,
          duration: gsap.utils.random(1.5, 2.2),
          ease: "bounce.out"
        }
      );

      placedItems.current.push({ x, y, width });
    };

    const interval = setInterval(dropItem, 550);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full h-80 bg-black overflow-hidden"
    />
  );
}