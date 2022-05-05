import Container from "../../components/container/container";
import Icon from "../../components/icon/icon";
import Image from "../../components/image/image";
import Searchbar from "../../components/searchBar/searchBar";

type StatCardProps = {
  iconType: string;
  statName: string;
};

//TODO: Add some kind of link to another page when clicking these stat cards
function StatCard({ iconType = "", statName = "" }: StatCardProps) {
  return (
    <li className="flex flex-col items-center justify-between gap-2 px-2 py-4 transition-all rounded cursor-pointer bg-primary/10 hover:bg-primary/20 hover:scale-105">
      <span className="inline-block w-8 fill-primary">
        <Icon type={iconType} />
      </span>
      <span className="text-xl text-center md:text-2xl">{statName}</span>
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
    <section className="relative flex flex-col items-center justify-center overflow-hidden h-[250px] md:h-[400px] md:gap-6">
      <h1 className="flex justify-center w-full mb-4 text-center font-bebas">
        <div className="flex flex-col justify-center w-11/12 uppercase md:w-9/12 leading-20">
          <span>
            <span className="text-fire">🔥flame🔥</span>
            the boys
          </span>
        </div>
      </h1>
      <div className="flex justify-center w-full">
        <Searchbar/>
      </div>
      <div className="absolute top-0 w-full h-full -z-10">
        <span className="absolute top-0 w-full h-full bg-black opacity-60"></span>
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
