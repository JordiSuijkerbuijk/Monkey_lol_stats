import { useEffect } from 'react';

import {
  animationTimeline,
  ScoreboardCard,
  ChampionCardProps,
} from '../../components/scoreboard/scoreboard';

import type { liveGameData } from '../../types/game';

// type Props = liveGameData;

// export default function Scoreboard({ game, summoner }: Props) {

export default function ScoreboardSection() {
  useEffect(() => {
    animationTimeline();
  }, []);

  const cards = [
    { id: 'Aatrox', name: 'Aatrox', title: '' },
    { id: 'Aatrox', name: 'Aatrox', title: '' },
    { id: 'Aatrox', name: 'Aatrox', title: '' },
    { id: 'Aatrox', name: 'Aatrox', title: '' },
    { id: 'Aatrox', name: 'Aatrox', title: '' },
  ];

  return (
    <div className='flex flex-col items-center w-3/4 h-full'>
      {/* bar for all the labels */}
      <div className='relative flex w-full mb-2 justify-self-start'>
        <div className='z-20 flex w-full h-10 py-[2px] text-2xl text-primary font-bebas'>
          <div className='ml-[12%]'>NAME</div>
          <div className='ml-[44%]'>KDA</div>
          <div className='ml-[10%]'>CS</div>
          <div className='ml-[10%]'>GOLD</div>
        </div>
        {/* Slanted block that is used as cover for the animation. This block will slide out of the way and reveal a different block */}
        <div
          className='absolute w-screen top-[-10px] left-[-60px] z-30 flex justify-center w-full h-[50px]'
          id='slanted-cover'
        >
          <div className='w-[calc(100%-(40px*2))] bg-background before:border-b-[50px] before:border-b-background before:border-l-[50px] before:border-l-transparent before:absolute before:top-0 before:left-0 after:border-t-[50px] after:border-t-background after:border-r-[50px] after:border-r-background after:absolute after:bottom-0 after:right-0' />
        </div>
        {/* Backdrop that is displayed behind the labels */}
        <div className='absolute w-full h-full left-0 bottom-0 bg-black skew-x-[-45deg]' />
        {/* Border that is overlayed over the Backdrop */}
        <div className='absolute w-full h-full left-0 bottom-2 border border-secondary skew-x-[-45deg]' />
      </div>
      {/* scoreboard needs cards where each players current data is shown */}
      <div className='z-10 flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
        {/* Scoreboard for team 1*/}
        {/* Add this to the scoreboard component */}
        {cards.map((item: ChampionCardProps, index: number) => {
          const translate = 88 * (cards.length - index);
          return (
            <div
              className={`flex items-center bg-black h-1/5 max-h-20 p-2`}
              id='scoreboard-item'
              style={{ transform: `translateY(${translate}px)` }}
              key={index}
            >
              <ScoreboardCard {...item} />
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
      {/* Scoreboard for team 2*/}
      <div className='flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
        {cards.map((item: ChampionCardProps, index: number) => {
          const translate = 88 * (index + 1);
          return (
            <div
              className={`flex items-center bg-black h-1/5 max-h-20 p-2`}
              id='scoreboard-item'
              style={{ transform: `translateY(-${translate}px)` }}
              key={index}
            >
              <ScoreboardCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
