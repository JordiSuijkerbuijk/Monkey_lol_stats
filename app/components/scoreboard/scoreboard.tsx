import anime from 'animejs';
import { useEffect, ReactElement } from 'react';

import type { liveGameData } from '../../types/game';

// type Props = liveGameData;

// export default function Scoreboard({ game, summoner }: Props) {
export default function Scoreboard() {
  useEffect(() => {
    animationTimeline();
  }, []);

  const cards = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-col items-center w-3/4 h-full'>
      {/* scoreboard needs cards where each players current data is shown */}
      <div className='flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
        {/* Scoreboard for team 1*/}
        {cards.map((item: number) => {
          const translate = 71 * (cards.length - (item - 1));
          return (
            <div
              className={`flex items-center justify-center bg-black h-1/5`}
              id='scoreboard-item'
              style={{ transform: `translateY(${translate}px)` }}
              key={item}
            >
              <ScoreboardCard />
            </div>
          );
        })}
      </div>
      {/* divider between scoreboards*/}
      <div className='relative flex items-center justify-between w-10/12 py-6'>
        <div className='w-1/2 scale-x-0 bg-secondary h-0.5 rounded-sm origin-right' id='divider' />
        <div className='px-4 text-3xl opacity-0 text-secondary font-bebas' id='vs'>
          vs
        </div>
        <div className='w-1/2 scale-x-0 bg-secondary h-0.5 rounded-sm origin-left' id='divider' />
      </div>
      <div className='flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
        {/* Scoreboard for team 2*/}
        {cards.map((item: number) => {
          const translate = 71 * item;
          return (
            <div
              className={`flex items-center justify-center bg-black h-1/5`}
              id='scoreboard-item'
              style={{ transform: `translateY(-${translate}px)` }}
              key={item}
            >
              <ScoreboardCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScoreboardCard() {
  return <div className=''>test</div>;
}

function animationTimeline() {
  const tl = anime.timeline();

  tl.add({
    targets: '#vs',
    opacity: 1,
    easing: 'cubicBezier(1,0,0,1);',
    duration: 500,
  });

  tl.add({
    targets: '#divider',
    scaleX: '100%',
    easing: 'cubicBezier(1,0,0,1);',
    duration: 500,
  });

  tl.add({
    targets: '#scoreboard-item',
    translateY: 0,
    easing: 'cubicBezier(0.79,0.14,0.15,0.86);;',
    duration: 500,
  });
}
