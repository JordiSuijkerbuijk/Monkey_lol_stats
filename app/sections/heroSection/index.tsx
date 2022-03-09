import Container from "../../components/container/container";
import Icon from "../../components/icon/icon";

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
    <section className="pt-16">
      <Container>
        <div className="grid gap-12 justify-items-center">
          <h1 className="text-center md:w-9/12">
            Get ready to{" "}
            <span className="text-tertiary whitespace-nowrap">🔥flame🔥</span>{" "}
            the boys
          </h1>
          <p className="italic">Using stats such as</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {possibleStats.map((stat) => (
              <StatCard
                iconType={stat.iconType}
                statName={stat.statName}
                key={stat.statName}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
