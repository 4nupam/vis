import CTA from "./Button/FooterCta";
import Data from "../DataStore/Footer.json";
import Image from "../utils/viswhiteLogo.svg"
import DroppingEffect from "./DroppingEffect";
export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-white">
      {/* Top CTA section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between gap-10">
          
          {/* Text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl">
            All-in-one <b className="font-bold">CRM</b>, one tool for all your
            relationships
          </h2>

          {/* Buttons */}
          <div className="flex items-center flex-col sm:flex-row ">
            <CTA name="Try for free" />
            <CTA name="Get a demo" bg={false} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10">

          {/* Brand column – always left */}
          {Data?.brand && (
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-6">
              <img
                src={Image}
                alt="Brand logo"
                className="w-24"
              />

              <div className="flex flex-col gap-3 text-sm text-neutral-400">
                {Data.brand.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Footer sections */}
          {Data.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">
                {section.title}
              </h4>

              <ul className="space-y-3 text-sm text-neutral-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
      <DroppingEffect/>
    </footer>
  );
}
