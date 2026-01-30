import gsap from "gsap";

export default function CTA({name}){
    return(
         <button
          className="bg-black text-white rounded-2xl px-4 py-2"
          onMouseEnter={(e) =>
            gsap.to(e.currentTarget, {
              scale: 1.05,
              duration: 0.2,
            })
          }
          onMouseLeave={(e) =>
            gsap.to(e.currentTarget, {
              scale: 1,
              duration: 0.2,
            })
          }
        >
          {name}
        </button>
    )
}