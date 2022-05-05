import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";

import trashAnimation from "./trash.json";
import checkAnimation from "./checkmark.json";
import bell from "./bell.json";
import ship from "./ship.json";

function Animation({
  animationData,
  startOnMount = false,
  startOnHover = false,
  animateOnClick = false,
  animateOnScroll = false,
}: {
  animationData: any;
  startOnMount: boolean;
  startOnHover: boolean;
  animateOnClick: boolean;
  animateOnScroll: boolean;
}) {
  const [showOtherMarkup, setShowOtherMarkup] = useState(true);
  const container = useRef() as React.MutableRefObject<HTMLDivElement>;
  const animation = useRef() as React.MutableRefObject<AnimationItem>;

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
      autoplay: false,
      loop: false,
    });

    if (startOnMount) {
      animation.current.play();
    }

    if (animateOnScroll) {
      window.addEventListener("scroll", onScroll);
    }
  }, []);

  function onScroll() {
    const scrollPosition = window.scrollY;
    const maxFrames = animation.current.totalFrames;
    const frame = (maxFrames / 100) * (scrollPosition / (200 / 100));

    if (frame <= maxFrames) {
      animation.current.goToAndStop(frame, true);
    }
  }

  function startLottieAnimation() {
    animation.current.loop = true;
    animation.current.play();
  }

  function stopanimation() {
    animation.current.loop = false;
  }

  function singleAnimation() {
    setShowOtherMarkup(false);
    animation.current.play();
  }

  return (
    <button
      onMouseEnter={startOnHover ? startLottieAnimation : undefined}
      onMouseLeave={startOnHover ? stopanimation : undefined}
      onClick={animateOnClick ? singleAnimation : undefined}
      className={animateOnScroll ? "bg-[white] block" : "block"}
    >
      <span
        className={clsx("inline-block w-96 fill-primary")}
        ref={container}
      ></span>
      {showOtherMarkup && animateOnClick && <span>Sign up!</span>}
    </button>
  );
}

export default function TestPage() {
  return (
    <div>
      <Animation
        animationData={trashAnimation}
        startOnHover={false}
        startOnMount={true}
        animateOnClick={false}
        animateOnScroll={false}
      />
      <div className="">
        <Animation
          animationData={ship}
          startOnHover={false}
          startOnMount={false}
          animateOnClick={false}
          animateOnScroll={true}
        />
      </div>
      <Animation
        animationData={checkAnimation}
        startOnHover={false}
        startOnMount={false}
        animateOnClick={true}
        animateOnScroll={false}
      />
      <Animation
        animationData={bell}
        startOnHover={true}
        startOnMount={false}
        animateOnClick={false}
        animateOnScroll={false}
      />
    </div>
  );
}
