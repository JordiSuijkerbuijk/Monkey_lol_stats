import { useLoaderData, LoaderFunction, Link } from 'remix';

import Container from '../../components/container/container';

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
    <Container containerClass='grid gap-5 items-start md:grid-cols-5 py-10'>
      {champions &&
        champions.map((item: Champion) => (
          <Link to={`./${item.id}`} key={item.key}>
            <div
              className='relative w-[120px] h-[120px] bg-contain flex justify-center items-end font-bebas tracking-wider cursor-pointer'
              style={{
                backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.id}.png')`,
              }}
            >
              <div className='z-[1]'>{item.name}</div>
              <div className='bg-black/[0.25] w-[100%] h-[100%] absolute' />
            </div>
          </Link>
        ))}
    </Container>
  );
}

//
