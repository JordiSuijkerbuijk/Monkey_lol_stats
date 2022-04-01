import Icon, { iconTypes } from '../icon/icon'

import { ChampionStats, ChampionInfo } from '../../types/champion'

import { champStatToIconType, champStatToReadableStat } from '../../utils/championInfoConversions';

type Props = {
  stats: ChampionStats,
  info: ChampionInfo
} 

type ComparisonObjectType = {
  attack: number,
  magic: number,
  defense: number,
  difficulty?: number
}

const statToIconMap = {
  attack: "fist",
  magic: "wand",
  defense: "shield",
  difficulty: "schoolcap"
}

export default function ChampionStatsbox({stats, info}: Props){
  //We want to check the 'main' attribute of a champion (magic, AD, tank), but we don't care about the difficulty, so we copy the object and delete the difficulty.
  const comparisonObject = {...info} as ComparisonObjectType
  delete comparisonObject.difficulty;

  //We extract the keys out of the object, so we can use the reduce function to find the 'highest' value.
  const champStatKeys = Object.keys(comparisonObject) as Array<keyof typeof comparisonObject>;
  const maxChampStat = champStatKeys.reduce((a, b) => {
    //To prevent typescript from thinking it could be undefined due to the optional 'difficulty' in the typing, we extract to variables with a fallback.
    const firstStat = comparisonObject[a] || 0;
    const secondStat = comparisonObject[b] || 0;
    return firstStat > secondStat ? a : b
  });

  const championIconType = statToIconMap[maxChampStat] as keyof typeof iconTypes

  //We first show a subset of stats based on the champion type.
  // function getRelevantStats(champType: keyof ComparisonObjectType) {
  //   switch(champType){
  //     case "attack": 
  //       return ['attackdamage', 'attackrange', 'attackspeed', 'movespeed'] as (keyof ChampionStats)[];
  //     case "magic":
  //       return ['hp', 'attackrange', 'mp', 'movespeed'] as (keyof ChampionStats)[];
  //     default: 
  //       return ['hp', 'armor', 'spellblock', 'movespeed'] as (keyof ChampionStats)[]
  //   }
  // }
  // const relevantStats = getRelevantStats(maxChampStat)
  const allStats = Object.keys(stats) as (keyof ChampionStats)[];

  return (
    <div className="grid gap-4">
      <div className="flex justify-center w-8/12 pb-4 mx-auto border-b-2 fill-primary border-primary/30">
        <Icon type={championIconType} className="w-12" />
      </div>
      <div className="grid grid-cols-2 gap-2 px-9">
        {Array.isArray(allStats) && allStats.map(relevantStat => {
          const iconType = champStatToIconType(relevantStat) as keyof typeof iconTypes
          const readableStatName = champStatToReadableStat(relevantStat);
          return (
            <span key={relevantStat} className="flex items-center" title={readableStatName}>
              <span className="inline-block w-6 mr-4 fill-primary">
                <Icon type={iconType} />
              </span>
              <span className="text-center">
                {stats[relevantStat]}
              </span>
            </span>
          )}
        )}
      </div>
    </div>
  )
}