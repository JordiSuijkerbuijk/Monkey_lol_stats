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
        <div className='flex w-full text-3xl text-secondary font-bebas'> 
          <div className='ml-[12%]'>
            NAME
          </div>
          <div className='ml-[36%]'>
            KDA
          </div>
          <div className='ml-[10%]'>
            CS
          </div>
          <div className='ml-[10%]'>
            GOLD
          </div>
        </div>
        {/* Slanted block for animation */}
        <div className='absolute top-0 left-0 w-full h-full bg-black' />
      </div>

      {/* scoreboard needs cards where each players current data is shown */}
      <div className='flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
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
      <div className='flex flex-col w-full space-y-2 overflow-hidden h-1/2'>
        {/* Scoreboard for team 2*/}
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
