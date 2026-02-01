import Image from "../utils/Integrations.svg";
import CTA from "./Button/CTA";
export default function Integrations() {
  return (
    <section className="flex flex-col py-12 h-screen justify-center gap-4 bg-white items-center">
      <span>Integration</span>
      <div className="text-3xl md:text-4xl items-center">
        Integrate folk in your critical workflows
      </div>
      <img src={Image} alt="integration image" />
      <span>Connect more than 6000+ tools</span>

      <CTA name={"Explore integrations"} bg={false} />
    </section>
  );
}
