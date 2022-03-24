// import { Link } from 'remix';
import TransitionOutLink from '../transitionOutLink/transitionOutLink';

import Image from '../image/image'

import type { Champion } from '../../types/champion';

export default function ChampionAvatar({id, name, title}: Champion){
  return (
    <TransitionOutLink to={`/champions/${id}`} className="group overflow-hidden">
        <div className='relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-contain flex justify-center items-end tracking-wider cursor-pointer'>
          <Image src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${id}.png`}
            isStatic={false}
            alt={`Avatar for ${name}`}
            width={80}
            height={80}
            loadingType="lazy"
            imageClass="absolute top-0 w-full h-full scale-1 transition-transform group-hover:scale-110"
          />
          <div className="absolute bottom-0 px-1 z-10 text-center translate-y-[calc(100%_-_20px)] transition-transform group-hover:translate-y-0">
            <div className="font-bebas leading-none">{name}</div>
            <span className="italic text-xs capitalize">{title}</span>
          </div>

          <div className='bg-black opacity-50 w-[100%] h-[100%] absolute transition-opacity group-hover:opacity-40' />
        </div>
      </TransitionOutLink>
  )
}