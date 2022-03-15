import { Outlet, useLoaderData, LoaderFunction } from 'remix';
import fetch from '../../utils/fetch';

type LoaderData = {
  featuredChampions: Array<object>;
};

export const loader: LoaderFunction = async () => {
  const data = await fetch('http://localhost:3000/champion/rotation');

  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <main className='grid gap-12'>
      <Outlet />
    </main>
  );
}
