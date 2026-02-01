import Image from "../utils/Integrations.svg";
import CTA from "./Button/CTA";

export default function Integrations() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 md:py-24 bg-white text-center gap-6">
      {/* Section Label */}
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Integration
      </span>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
        Integrate folk into your critical workflows
      </h2>

      {/* Image */}
      <img
        src={Image}
        alt="Illustration showing integrations"
        className="w-full max-w-lg mt-4"
      />

      {/* Subtext */}
      <p className="text-gray-600 text-base md:text-lg">
        Connect with more than <strong>6000+ tools</strong>
      </p>

      {/* CTA Button */}
      <CTA name="Explore integrations" bg={false} />
    </section>
  );
}