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
    <section>
      <Container containerClass="grid">
        <ChampionStatsBox stats={champStats} info={champInfo}/>
      </Container>
    </section>
  )
}