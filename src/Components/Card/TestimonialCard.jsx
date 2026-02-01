import { IoIosRocket } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

const TAG_STYLES = {
  Sales: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    icon: <IoIosRocket />,
  },
  "Event Management": {
    bg: "bg-orange-100",
    text: "text-orange-700",
    icon: <IoIosRocket />,
  },
  Growth: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    icon: <MdEventNote />,
  },
  Product: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    icon: <MdEventNote />,
  },
  CRM: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    icon: <MdEventNote />,
  },
};

export default function TestimonialCard({ data }) {
  if (!data) return null;

  const {
    name,
    image,
    company_logo,
    company_name,
    position,
    description,
    tag = [],
  } = data;

  return (
    <article className="relative h-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all">
      
      {/* Quote icon */}
      <RiDoubleQuotesL className="absolute top-4 right-4 text-neutral-200 text-2xl" />

      {/* Header */}
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium">{name}</p>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <img
              src={company_logo}
              alt={company_name}
              className="w-4 h-4 rounded-sm"
            />
            <span>{company_name}</span>
            <span>•</span>
            <span>{position}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm text-neutral-700 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tag.map((t) => {
          const style = TAG_STYLES[t.name] || {
            bg: "bg-neutral-100",
            text: "text-neutral-600",
            icon: null,
          };

          return (
            <span
              key={t.id}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                ${style.bg} ${style.text}`}
            >
              {style.icon && (
                <span className="text-sm">{style.icon}</span>
              )}
              {t.name}
            </span>
          );
        })}
      </div>
    </article>
  );
}
