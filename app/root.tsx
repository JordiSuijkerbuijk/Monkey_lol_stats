import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition
} from "remix";
import { useEffect, useRef } from 'react';
import type { MetaFunction } from "remix";

import Navbar from "./components/navbar/navbar";
import LoadSpinner from './components/loadSpinner/loadSpinner';

import { transitionIn } from './utils/transitions';

import styles from "./styles/app.css";

export const meta: MetaFunction = () => {  
  return { title: "Monkey LoL stats 🐒" };
};

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const transition = useTransition();
  const isLoading = useRef(false)

  useEffect(() => {
    //Check if the ref shows that the previous transition was a normal navigation load. If it was, we want to transition the page in. 
    if(isLoading.current) {
      transitionIn();
    }

    //We always change the isLoading ref, so we can check on the next change and see if this action is a navigational load
    isLoading.current = (transition.state === 'loading');
  }, [transition.state])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative">
          <LoadSpinner />
        <div id="content" className="origin-center origin-top">
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
