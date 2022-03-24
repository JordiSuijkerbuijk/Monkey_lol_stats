import { useLoaderData, LoaderFunction } from 'remix';

import Container from '../../components/container/container';
import ChampionAvatar from '~/components/championAvatar/championAvatar';

import fetch from '../../utils/fetch';

import type { Champion } from '../../types/champion';

type LoaderData = {
  data: boolean | Array<Champion>;
};

export const loader: LoaderFunction = async () => {
  const data = await fetch('http://localhost:3000/champions');
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  const champions = (data.data as Array<Champion>) || false;

  return (
    <Container containerClass='grid gap-5 items-start grid-cols-3 md:grid-cols-5 py-10'>
      {champions &&
        champions.map((item: Champion) => {
          return (
          <ChampionAvatar {...item} key={item.key}/>
        )})}
    </Container>
  );
}

//
