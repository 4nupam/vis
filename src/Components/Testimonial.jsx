import Data from "../DataStore/Testimonial.json";
import Card from "../Components/Card/TestimonialCard";

export default function Testimonial() {
  return (
    <section className="px-4 py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Loved by founders & teams
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

          {/* Hero card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Card data={Data[0]} variant="hero" />
          </div>

          {/* Regular cards */}
          <div>
            <Card data={Data[1]} />
          </div>

          <div>
            <Card data={Data[2]} />
          </div>

          <div className="lg:col-span-2">
            <Card data={Data[3]} />
          </div>

          <div>
            <Card data={Data[4]} />
          </div>

          <div>
            <Card data={Data[5]} />
          </div>

        </div>
      </div>
    </section>
  );
}
