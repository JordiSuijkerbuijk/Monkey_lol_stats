export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: Array<
    "Mage" | "Support" | "Fighter" | "Tank" | "Marksman" | "Assassin"
  >;
  partype: string;
  stats: ChampionStats;
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  stats: ChampionStats;

  image: ChampionImage;
  skins: ChampionSkin[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  tags: ChampionTag[];
  partype: string;
  spells: ChampionSpell[];
  passive: ChampionPassive;
  recommended: any[]; //Also seems unused by riot.
}

export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionSkin = {
  id: string;
  num: string;
  name: string;
  chromas: boolean;
};

export type ChampionTag =
  | "Mage"
  | "Support"
  | "Fighter"
  | "Tank"
  | "Marksman"
  | "Assassin";

export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: ChampionLevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: any; // This is never used by Riot?
  effect: number[][]; // No clue
  effectBurn: string[];
  vars: any[]; //Also seems unused by Riot
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

export type ChampionLevelTip = {
  label: string[];
  effect: string[];
};

export type ChampionPassive = {
  name: string;
  description: string;
  image: ChampionImage;
};
