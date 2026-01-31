import FirstComponent from "../Components/FirstComponent";
import Navbar from "../Components/Navbar";
import SecondCompo from "../Components/SecondCompo";
import image from "../utils/second.svg";
import second from "../utils/second2.svg";
import third from "../utils/third.svg";
import fourth from "../utils/fourth.svg";
import fifth from "../utils/fifth.svg";
export default function Main() {
  const MainData = [
    {
      id: 0,
      title: "Effortlessly organize contacts",
      para: "Centralize and sync all your contacts and interactions in one place, because context is key",
      socialMedia: false,
      btn: "Explore Contact Sync",
      image: image,
      color: "#FFF8BB",
    },
    {
      id: 1,
      title: "Prospect faster than ever before",
      para: "Save a contact without jumping between tools — import from anywhere on the web with folkX",
      socialMedia: true,
      btn: "Explore Chrome extension",
      image: second,
      color: "#FFE8D7",
    },
    {
      id: 2,
      title: "Find emails in 1-click, really",
      para: "Let folk enrich your lists with contact details in one click, so you can focus on nurturing relationships",
      socialMedia: false,
      btn: "Explore enrichment",
      image: third,
      color: "#F9F1FE",
    },
    {
      id: 3,
      title: "Managing deals just got easier",
      para: "Create pipelines to match your workflow, collaborate with team members, and close more deals",
      socialMedia: false,
      btn: "Explore pipeline management",
      image: fourth,
      color: "#FCE5F3",
    },
    {
      id: 4,
      title: "Grow your outreach",
      para: "Write personalized emails faster with AI, send automated sequences, and easily track the results",
      socialMedia: false,
      btn: "Explore Chrome extension",
      image: fifth,
      color: "#E6EDFE",
    },
  ];

  return (
    <section className="">
      <Navbar />
      <FirstComponent />
      
      {MainData?.length > 0 &&
        MainData.map((e) => (
          <section className="flex flex-col w-full">
            <SecondCompo item={e} />
          </section>
        ))}
    </section>
  );
}
