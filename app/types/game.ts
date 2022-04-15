import type { CurrentGameParticipant, Summoner } from './summoner';

export type liveGameData = {
  game: CurrentGameInfo;
  summoner: Summoner;
};

export type CurrentGameInfo = {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: string;
  gameMode: string;
  bannedChampions: Array<BannedChampion>;
  participants: Array<CurrentGameParticipant>;
};

export type Perk = {
  perksIds: Array<number>;
  perkStyle: number;
  perkSubStyle: number;
};

type BannedChampion = {
  pickTurn: number;
  championId: number;
  teamId: number;
};
