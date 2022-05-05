import { useRef, useEffect } from 'react';
import { Form } from "remix";
import clsx from 'clsx';
import lottie from 'lottie-web';

import searchAnimation from './search-lottie-animation.json'

import type { AnimationItem } from 'lottie-web';

type Props = {
  placeholder?: String;
  formClass?: String;
};

export default function Searchbar({ placeholder, formClass }: Props) {
  const lottieContainer = useRef() as React.MutableRefObject<HTMLDivElement>;
  const lottieAnimation = useRef() as React.MutableRefObject<AnimationItem>;


  useEffect(() => {
    lottieAnimation.current = lottie.loadAnimation({
      container: lottieContainer.current,
      animationData: searchAnimation,
      autoplay: false
    })
  }, []);

  function startLottieAnimation(){
    lottieAnimation.current.loop = true;
    lottieAnimation.current.play();
  }

  function stopLottieAnimation(){
    lottieAnimation.current.loop = false;
  }

  return (
    <Form method="get" action="/getSummoner" className={clsx(["relative", formClass && formClass])}>
      <input
        type="text"
        name="summoner name"
        className="w-full py-2 pl-4 rounded-full text-medium bg-primary pr-14 text-background outline-0 focus-visible:outline-1"
        placeholder={placeholder && "Searchterm..."}
      />
      <button className="absolute flex items-center justify-center w-8 h-8 transition-transform -translate-y-1/2 rounded-full right-2 top-1/2 bg-secondary hover:scale-110" onMouseEnter={startLottieAnimation} onMouseLeave={stopLottieAnimation}>
        <span className="w-4 fill-primary" ref={lottieContainer}></span>
      </button>
    </Form>
  );
}
