import { Outlet, useLoaderData, LoaderFunction } from 'remix';

type LoaderData = {
  featuredChampions: Array<object>;
};

export const loader: LoaderFunction = async () => {
  const data = 'test';

  return data;
};

export default function Champion() {
  const data = useLoaderData<LoaderData>();
  //Get search and filter bar in here
  return (
    <main className='grid gap-12'>
      <Outlet />
    </main>
  );
}
