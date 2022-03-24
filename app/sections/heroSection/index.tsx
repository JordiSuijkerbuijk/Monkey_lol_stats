import Container from "../../components/container/container";
import Icon from "../../components/icon/icon";
import Image from "../../components/image/image";

type StatCardProps = {
  iconType: string;
  statName: string;
};

//TODO: Add some kind of link to another page when clicking these stat cards
function StatCard({ iconType = "", statName = "" }: StatCardProps) {
  return (
    <li className="flex px-2 py-4 flex-col items-center items-center justify-between gap-2 bg-primary/10 rounded transition-all cursor-pointer hover:bg-primary/20 hover:scale-105">
      <span className="inline-block w-8 fill-primary">
        <Icon type={iconType} />
      </span>
      <span className="text-xl md:text-2xl text-center">{statName}</span>
    </li>
  );
}

export default function HeroSection() {
  const possibleStats: StatCardProps[] = [
    { iconType: "crown", statName: "Winrate" },
    { iconType: "coins", statName: "Gold earned" },
    { iconType: "skull", statName: "KD/A" },
    { iconType: "handshake", statName: "Participation" },
    { iconType: "eye", statName: "Vision score" },
    { iconType: "ellipsis", statName: "And much more" },
  ];

  return (
    <section className="relative overflow-hidden">
      <h1 className="text-center h-[250px] md:h-[400px] flex justify-center font-bebas">
        <div className="flex flex-col justify-center md:w-9/12 uppercase leading-20">
          <span className="text-secondary whitespace-nowrap mb-4">
            🔥flame🔥
          </span>{" "}
          the boys
        </div>
      </h1>
      <div className="absolute w-full h-full top-0 -z-10">
        <span className="absolute w-full h-full top-0 bg-black opacity-60"></span>
        <Image
          imageClass="w-full h-full object-cover"
          isStatic
          src={"infernalVelkoz"}
          alt=""
          width={1215}
          height={717}
          loadingType="eager"
        />
      </div>
    </section>
  );
}
