import type { ChampionStats } from "../types/champion";

type championArchetype = "attack" | "magic" | "defense" | "difficulty";

export type RelevantStatGroup = {
  groupTitle: string;
  flatStat: keyof ChampionStats;
  scalingStat: keyof ChampionStats | null;
};

export default function getRelevantStats(champType: championArchetype) {
  switch (champType) {
    case "attack":
      return [
        {
          groupTitle: "Attack damage",
          flatStat: "attackdamage",
          scalingStat: "attackdamageperlevel",
        },
        {
          groupTitle: "Attack range",
          flatStat: "attackrange",
          scalingStat: null,
        },
        {
          groupTitle: "Attack speed",
          flatStat: "attackspeed",
          scalingStat: "attackspeedperlevel",
        },
        {
          groupTitle: "Movement speed",
          flatStat: "movespeed",
          scalingStat: null,
        },
      ] as RelevantStatGroup[];
    case "magic":
      return [
        {
          groupTitle: "Health",
          flatStat: "hp",
          scalingStat: "hpperlevel",
        },
        {
          groupTitle: "Ability resource",
          flatStat: "mp",
          scalingStat: "hpperlevel",
        },
        {
          groupTitle: "Attack range",
          flatStat: "attackrange",
          scalingStat: null,
        },
        {
          groupTitle: "Movement speed",
          flatStat: "movespeed",
          scalingStat: null,
        },
      ] as RelevantStatGroup[];
    default:
      return [
        {
          groupTitle: "Health",
          flatStat: "hp",
          scalingStat: "hpperlevel",
        },
        {
          groupTitle: "Armor",
          flatStat: "armor",
          scalingStat: "armorperlevel",
        },
        {
          groupTitle: "Magic resistance",
          flatStat: "spellblock",
          scalingStat: "spellblockperlevel",
        },
        {
          groupTitle: "Movement speed",
          flatStat: "movespeed",
          scalingStat: null,
        },
      ] as RelevantStatGroup[];
  }
}
