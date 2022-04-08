import { ChampionStats } from "../types/champion";

export function champStatToImage(statName: keyof ChampionStats) {
  const mapping = {
    armor: "armor",
    armorperlevel: "armor",
    attackdamage: "axe",
    attackdamageperlevel: "axe",
    attackrange: "attackRange",
    attackspeed: "attackSpeed",
    attackspeedperlevel: "attackSpeed",
    crit: "crit",
    critperlevel: "crit",
    hp: "health",
    hpperlevel: "health",
    hpregen: "health",
    hpregenperlevel: "health",
    movespeed: "moveSpeed",
    mp: "mana",
    mpperlevel: "mana",
    mpregen: "mana",
    mpregenperlevel: "mana",
    spellblock: "magicResist",
    spellblockperlevel: "magicResist",
  };

  const iconName = mapping[statName] || "shield";
  return iconName;
}

export function champStatToReadableStat(statName: keyof ChampionStats) {
  const mapping = {
    armor: "Armor",
    armorperlevel: "Armor per level",
    attackdamage: "Attack damage",
    attackdamageperlevel: "Attack damage per level",
    attackrange: "Attack range",
    attackspeed: "Attack speed",
    attackspeedperlevel: "Attack speed per level",
    crit: "Crit chance",
    critperlevel: "Crit chance per level",
    hp: "Health",
    hpperlevel: "Health per level",
    hpregen: "Health regen",
    hpregenperlevel: "Health regen per level",
    movespeed: "Movement speed",
    mp: "Ability resource",
    mpperlevel: "Ability resource per level",
    mpregen: "Ability resource regeneration",
    mpregenperlevel: "Ability resource regeneration per level",
    spellblock: "Magic resist",
    spellblockperlevel: "Magic resist per level",
  };

  const readableStatname = mapping[statName] || "Unknown stat";
  return readableStatname;
}
