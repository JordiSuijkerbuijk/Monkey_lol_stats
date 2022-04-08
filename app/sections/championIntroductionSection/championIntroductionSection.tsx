import Container from "../../components/container/container";
import ChampionAbilityBox from "../../components/championAbilityBox/championAbilityBox";
import ChampionStatsBox from "../../components/championStatsBox/championStatsbox";

import {
  ChampionStats,
  ChampionInfo,
  ChampionPassive,
  ChampionSpell,
} from "../../types/champion";

type ChampionIntroductionProps = {
  champStats: ChampionStats;
  champInfo: ChampionInfo;
  champPassive: ChampionPassive;
  champAbilities: ChampionSpell[];
};

export default function ChampionIntroductionSection({
  champStats,
  champInfo,
  champPassive,
  champAbilities,
}: ChampionIntroductionProps) {
  return (
    <section className="mb-12">
      <Container containerClass="grid gap-12 justify-center lg:auto-cols-max lg:grid-flow-col lg:gap-36">
        <ChampionAbilityBox passive={champPassive} abilities={champAbilities} />
        <ChampionStatsBox stats={champStats} info={champInfo} />
      </Container>
    </section>
  );
}
