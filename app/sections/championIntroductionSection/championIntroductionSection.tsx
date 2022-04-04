import Container from '../../components/container/container';
import ChampionStatsBox from '../../components/championStatsBox/championStatsbox';

import { ChampionStats, ChampionInfo } from '../../types/champion';

type ChampionIntroductionProps = {
  lore: string,
  champStats: ChampionStats,
  champInfo: ChampionInfo
}

export default function ChampionIntroductionSection({lore, champStats, champInfo}: ChampionIntroductionProps){
  return (
    //TODO:
    // FIX the whitespace coming from the outer container instead of from here.
    <section className="mb-12">
      <Container containerClass="grid gap-4 items-center sm:grid-cols-2 md:gap-8">
        <ChampionStatsBox stats={champStats} info={champInfo}/>
        <p>
          {lore}
        </p>
      </Container>
    </section>
  )
}