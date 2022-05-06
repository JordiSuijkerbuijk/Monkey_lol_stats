import anime from 'animejs';

import Image from '../image/image';

//TODO: move this to special file
export type ChampionCardProps = {
  id: string;
  name: string;
  kda: string;
  cs: string,
  gold: string
};

//Make this into correct type Champion type / game type
export function ScoreboardCard({ id, name, kda, cs, gold }: ChampionCardProps) {
  return (
    <div className='flex items-center w-full h-full grid-cols-5 overflow-hidden text-xl text-primary font-bebas'>
      <div className='flex w-1/12 place-self-center'>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${id}.png`}
          isStatic={false}
          alt={`Avatar for ${name}`}
          width={65}
          height={65}
          loadingType='lazy'
          imageClass='object-cover'
        />
      </div>
      {/* <div className='flex w-full text-xl place-self-center text-primary font-bebas'> */}
        <div className='w-6/12 ml-4'>{name}</div>
        <div className='w-2/12'>{kda}</div>
        <div className='w-2/12'>{cs}</div>
        <div className='w-2/12'>{gold}</div>
      {/* </div> */}
    </div>
  );
}

export function animationTimeline() {
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
    easing: 'cubicBezier(0.79,0.14,0.15,0.86);',
    duration: 500,
  });

  tl.add({
    targets: '#slanted-cover',
    translateX: '100%',
    easing: 'cubicBezier(0.79,0.14,0.15,0.86);',
    duration: 900,
  });
}
