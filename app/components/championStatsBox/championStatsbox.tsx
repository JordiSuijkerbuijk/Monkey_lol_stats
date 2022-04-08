import Image from "../image/image";
import HorizontalDivider from "../../components/framebox/horizontalDivider";

import { ChampionStats, ChampionInfo } from "../../types/champion";

import { champStatToImage } from "../../utils/championInfoConversions";
import getRelevantChampStats from "../../utils/getRelevantChampStats";

type Props = {
  stats: ChampionStats;
  info: ChampionInfo;
};

type ComparisonObjectType = {
  attack: number;
  magic: number;
  defense: number;
  difficulty?: number;
};

export default function ChampionStatsbox({ stats, info }: Props) {
  //We want to check the 'main' attribute of a champion (magic, AD, tank), but we don't care about the difficulty, so we copy the object and delete the difficulty.
  const comparisonObject = { ...info } as ComparisonObjectType;
  delete comparisonObject.difficulty;

  //We extract the keys out of the object, so we can use the reduce function to find the 'highest' value.
  const champStatKeys = Object.keys(comparisonObject) as Array<
    keyof typeof comparisonObject
  >;

  const maxChampStat = champStatKeys.reduce((a, b) => {
    //To prevent typescript from thinking it could be undefined due to the optional 'difficulty' in the typing, we extract to variables with a fallback.
    const firstStat = comparisonObject[a] || 0;
    const secondStat = comparisonObject[b] || 0;
    return firstStat > secondStat ? a : b;
  });

  // We first show a subset of stats based on the champion type.
  const relevantStats = getRelevantChampStats(maxChampStat);
  return (
    <div className="grid gap-4">
      <h2 className="mb-8">Stats</h2>
      <div className="grid gap-4 lg:gap-6">
        {Array.isArray(relevantStats) &&
          relevantStats.map((statGroup) => {
            const flatStat = stats[statGroup.flatStat];
            const scalingStat = statGroup.scalingStat
              ? stats[statGroup.scalingStat]
              : null;

            const statImage = champStatToImage(statGroup.flatStat);

            return (
              <div key={statGroup.groupTitle} className="grid gap-4">
                <span className="flex items-center justify-center gap-2 text-lg text-medium">
                  {statGroup.groupTitle}
                  <span className="w-4 h-4">
                    <Image
                      src={statImage}
                      alt={`Icon for ${statGroup.groupTitle}`}
                      loadingType="lazy"
                      isStatic
                      width={48}
                      height={48}
                    />
                  </span>
                </span>
                <div className="grid grid-cols-2 lg:gap-8">
                  <div className="flex flex-col items-center">
                    <span>Base value</span>
                    <span>{flatStat}</span>
                  </div>

                  {statGroup.scalingStat && (
                    <div className="flex flex-col items-center">
                      <span>Per level</span>
                      <span>{scalingStat}</span>
                    </div>
                  )}
                </div>
                <HorizontalDivider />
              </div>
            );
          })}
      </div>
    </div>
  );
}
