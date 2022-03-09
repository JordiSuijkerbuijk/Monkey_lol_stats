import HeroSection from "../sections/heroSection/index";
import TextImageSection from "../sections/textImageSection/index";

const firstTextImageSection = {
  title: "Well-informed flaming sessions",
  description:
    "With Riot's data it is now possible to show you friends just how trash they are. No excuses. This way, you can coach your buddies to greatness.",
  inverted: true,
  image: {
    src: "rankedBanner",
    alt: "Riven fighting Shyvana",
    width: 1920,
    height: 1080,
    loadingType: "lazy" as const,
  },
  cta: {
    text: "Get started",
    link: "/search",
    openInNewTab: false,
  },
};

const secondTextImageSection = {
  title: "Have a leg up on your opponents in Clash!",
  description:
    "Determine the most valuable bans, scary opponents and the lanes to look out for. Gain intel to bring home that victory cup, unless you know.. you feed your opponents.",
  inverted: false,
  image: {
    src: "sktchampionsplash",
    alt: "Team of champions ready for battle",
    width: 1215,
    height: 717,
    loadingType: "lazy" as const,
  },
};

export default function Index() {
  return (
    <main className="grid gap-12">
      <HeroSection />
      <TextImageSection {...firstTextImageSection} />
      <TextImageSection {...secondTextImageSection} />
    </main>
  );
}
