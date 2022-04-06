import { useLoaderData, LoaderFunction, useCatch } from 'remix';
import type { ThrownResponse } from 'remix';

import ChampionDetailHeaderSection from "../../sections/headers/championDetail";
import ChampionIntroductionSection from "../../sections/championIntroductionSection/championIntroductionSection";
import ChampionSkinSection from "../../sections/championSkinSection/championSkinSection";

import fetch from '../../utils/fetch';

import type { ChampionDetail } from '../../types/champion';

type LoaderData = {
  data: ChampionDetail;
};

type FetchError = {
  error: string;
  status: number;
};

export const loader: LoaderFunction = async ({ params }) => {
  const champion = `${params.champion?.charAt(0).toUpperCase()}${params.champion?.slice(1)}`;

  if (!champion) {
    return false;
  }

  //TODO: remove this catch is redundant, should .thens and .catches be used together with await?
  const response = await fetch(`http://localhost:3000/champions/${champion}`);

  //Might need to util basic error handling
  if (typeof response === 'boolean') {
    throw new Response('Server error', {
      status: 500,
    });
  }

  const error = response as FetchError;

  if (error.status >= 400) {
    throw new Response(error.error, {
      status: error.status,
    });
  }


  const championData = response.data[champion] as ChampionDetail;

  return {
    data: championData,
  };
};

export default function ChampionDetailPage() {
  const loaderData = useLoaderData<LoaderData>();

  //The champion data we need is under the champion name, which is nested inside a .data attribute ().
  //example: http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/Aatrox.json
  const championData = loaderData.data;
  return (
    <>
      <ChampionDetailHeaderSection {...championData}/>
      <ChampionIntroductionSection champStats={championData.stats} champInfo={championData.info} champPassive={championData.passive} champAbilities={championData.spells} />
      <ChampionSkinSection skins={championData.skins} championId={championData.id} championName={championData.name}/>
    </>
  );
}

export function CatchBoundary() {
  // this returns { status, statusText, data }
  const caught = useCatch<ThrownResponse>();

  switch (caught.status) {
    case 404:
    case 500:
      return (
        <section>
          <h1 className='bg-black text-center p-12 h-[400px] bg-cover bg-center flex justify-center'>
            <div className='flex flex-col justify-center md:w-6/12 font-bebas text-8xl'>
              {caught.status} <br /> Something went wrong!
            </div>
          </h1>
        </section>
      );
  }

  return (
    <div>
      Something went wrong: {caught.status} {caught.statusText}
    </div>
  );
}
