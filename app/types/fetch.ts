import type { Champion, ChampionDetail } from './champion';

//type the fetches correct type from Types
export type FetchType = {
  [T in keyof Types]: Types[T];
};

//Types for all endpoints and their parameters/responseTypes
export type Types = {
  ChampionType: {
    parameters: { body?: object; urlParameters?: { [k: string]: string } };
    reponseType: Champion;
  };
  ChampionClassFilterType: {
    parameters: { body?: object; urlParameters: { [k: string]: string } };
    reponseType: Champion;
  };
  ChampionDetailType: {
    parameters: { body?: object; urlParameters: { [k: string]: string } };
    reponseType: ChampionDetail;
  };
};

export type FetchError = {
  status_code: number;
  message: string;
  url?: string;
};
