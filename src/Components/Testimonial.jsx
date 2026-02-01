import Data from "../DataStore/Testimonial.json";
import Card from "../Components/Card/TestimonialCard";

export default function Testimonial() {
  return (
    <section className="px-4 py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Testimonial
        </h2>

        {/* Bento Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            auto-rows-[minmax(220px,auto)]
            gap-6
          "
        >
          {/* HERO — big left */}
          <div className="lg:col-span-1 lg:row-span-1">
            <Card data={Data[0]} variant="hero" />
          </div>

          {/* Tall top-middle */}
          <div className="lg:row-span-1">
            <Card data={Data[1]} />
          </div>

          {/* Small top-right */}
          <div>
            <Card data={Data[2]} />
          </div>

          {/* Small bottom-left */}
          <div className="lg:row-span-[1/2]">
            <Card data={Data[3]} />
          </div>

          {/* Wide bottom-middle */}
          <div className="lg:col-span-1">
            <Card data={Data[4]} />
          </div>

          {/* Tall bottom-right */}
          <div className="lg:row-span-1">
            <Card data={Data[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
