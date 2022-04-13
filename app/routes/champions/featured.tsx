import { useLoaderData, LoaderFunction } from 'remix';

import Container from '../../components/container/container';
import ClassFilterheader from '../../components/classFilterHeader/classFilterheader';
import ChampionAvatar from '~/components/championAvatar/championAvatar';

import fetch from '../../utils/fetch/fetch';

import type { Champion } from '../../types/champion';

type LoaderData = {
  data: boolean | Array<Champion>;
};

export const loader: LoaderFunction = async () => {
  const data = await fetch(`${process.env.API_BASE_URL}/champions/rotation`);
  return data;
};

export default function Featured() {
  const data = useLoaderData<LoaderData>();

  const featuredChampions = (data.data as Array<Champion>) || false;

  return (
    <Container>
      <ClassFilterheader />
      <div className='grid items-start grid-cols-3 gap-5 py-10 md:grid-cols-5'>
        {featuredChampions &&
          featuredChampions.map((item: Champion) => {
            return <ChampionAvatar {...item} key={item.key} />;
          })}
      </div>
    </Container>
  );
}

//
