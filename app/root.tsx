import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
  useSearchParams,
} from 'remix';
import { useEffect, useRef } from 'react';
import type { MetaFunction } from 'remix';

import Navbar from './components/navbar/navbar';
import LoadSpinner from './components/loadSpinner/loadSpinner';

import { transitionIn } from './utils/transitions';

import styles from './styles/app.css';

export const meta: MetaFunction = () => {
  return { title: 'Monkey LoL stats 🐒' };
};

export const links = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  const transition = useTransition();
  const isLoading = useRef(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check if the ref shows that the previous transition was a normal navigation load. If it was, we want to transition the page in.
    // We want to prevent the transition from happening when we only change the query paramers. For now we will just check if there are any query parameters and don't transition if we have them.
    // In the future, an exception may be made for a searchTerm. As well as a beter solution may be implemented so that we have a more robust solution.
    const currentQueryParams = searchParams.toString();
    if (isLoading.current && currentQueryParams === '') {
      transitionIn();
    }

    //We always change the isLoading ref, so we can check on the next change and see if this action is a navigational load
    isLoading.current = transition.state === 'loading';
  }, [transition.state]);

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='relative'>
        <LoadSpinner />
        <Navbar />
        <div id='content' className='flex justify-center origin-center origin-top'>
          {/* Question: Why is the navbar inside it of the content, should it not be above the content? */}
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
