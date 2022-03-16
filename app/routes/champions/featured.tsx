import { useLoaderData, LoaderFunction } from 'remix';
import fetch from '../../utils/fetch';

import type { Champion } from '../../types/champion';

type LoaderData = {
  data: boolean | Array<Champion>;
};

export const loader: LoaderFunction = async () => {
  const data = await fetch('http://localhost:3000/champion/rotation');

  return data;
};

export default function Featured() {
  const data = useLoaderData<LoaderData>();

  const featuredChampions = (data.data as Array<Champion>) || false;

  return (
    <main className='grid gap-12'>
      {featuredChampions &&
        featuredChampions.map((item: Champion) => <div key={item.key}> {item.id}</div>)}
    </main>
  );
}

//
