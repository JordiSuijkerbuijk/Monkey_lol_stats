import { useLoaderData, LoaderFunction, useCatch } from 'remix';

import type { ThrownResponse } from 'remix';

import fetch from '../../utils/fetch';

import type { Champion } from '../../types/champion';

type LoaderData = {
  data: Champion;
};

type fetchError = {
  error: string;
};
export const loader: LoaderFunction = async ({ params }) => {
  const champion = params.champion;

  if (!champion) {
    return false;
  }

  const data = await fetch(`http://localhost:3000/champions/${champion}`).catch((err) => {
    console.log(err);
    throw new Response('Not Found', {
      status: 404,
    });
  });

  if (!data) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return data;
};

export default function ChampionDetail() {
  const data = useLoaderData<LoaderData>();

  const champion = data.data as Champion;

  return (
    <section>
      {/* Create section for this hero */}
      <h1
        className='bg-black text-center p-12 h-[400px] bg-cover bg-center flex justify-center'
        style={{
          backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg')`,
        }}
      >
        <div className='flex flex-col justify-center md:w-6/12 font-bebas text-8xl'>
          {champion.name}
        </div>
      </h1>
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
          <h1 className='bg-black text-center p-12 h-[400px] bg-cover bg-center flex justify-center'>
            <div className='flex flex-col justify-center md:w-6/12 font-bebas text-8xl'>
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
