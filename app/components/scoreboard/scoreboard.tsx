import anime from 'animejs';

import Image from '../image/image';

export type ChampionCardProps = {
  id: string;
  name: string;
  title: string;
};

//Make this into correct type Champion type / game type
export function ScoreboardCard({ id, name, title }: ChampionCardProps) {
  return (
    <div className='flex w-auto h-full overflow-hidden'>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${id}.png`}
        isStatic={false}
        alt={`Avatar for ${name}`}
        width={65}
        height={65}
        loadingType='lazy'
        imageClass='flex place-self-center'
      />
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
    easing: 'cubicBezier(0.79,0.14,0.15,0.86);;',
    duration: 500,
  });
}
