import { useLoaderData, LoaderFunction, useCatch } from "remix";
import type { ThrownResponse } from "remix";

import ChampionDetailHeaderSection from "../../sections/headers/championDetail";
import ChampionIntroductionSection from "../../sections/championIntroductionSection/championIntroductionSection";
import ChampionSkinSection from "../../sections/championSkinSection/championSkinSection";

import fetch from "../../utils/fetch";

import type { ChampionDetail } from "../../types/champion";

type LoaderData = {
  data: ChampionDetail;
};

type fetchError = {
  error: string;
};
export const loader: LoaderFunction = async ({ params }) => {
  const champion = params.champion;

  if (!champion) {
    return false;
  }

  const data = await fetch(`http://localhost:3000/champions/${champion}`).catch(
    (err) => {
      console.log(err);
      throw new Response("Not Found", {
        status: 404,
      });
    }
  );

  const championData = data.data[champion];

  if (!data) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

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
    <section>
      <ChampionDetailHeaderSection {...championData}/>
      <ChampionIntroductionSection lore={championData.lore} champStats={championData.stats} champInfo={championData.info}/>
      <ChampionSkinSection skins={championData.skins} championId={championData.id} championName={championData.name}/>
    </section>
  );
}

export function CatchBoundary() {
  // this returns { status, statusText, data }
  const caught = useCatch<ThrownResponse>();

  switch (caught.status) {
    case 404:
      return (
        <section>
          <h1 className="bg-black text-center p-12 h-[400px] bg-cover bg-center flex justify-center">
            <div className="flex flex-col justify-center md:w-6/12 font-bebas text-8xl">
              404 <br /> Champion not found!
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
