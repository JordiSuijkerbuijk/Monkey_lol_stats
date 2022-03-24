import Image from '../../components/image/image'
import type { Champion } from '../../types/champion'


export default function ChampionDetailHeader(props: Champion){
  return (
    <div
      className="relative h-[250px] md:h-[400px] flex justify-center items-center"
    >
      <div className="relative flex h-full w-full justify-center">
        <Image 
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
          alt=""
          isStatic={false}
          width={undefined}
          height={undefined}
          loadingType="eager"
          imageClass="h-full w-full object-top object-cover"
        />
        <span className="absolute w-full h-full top-0 left-0 bg-background opacity-60"></span>
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bebas text-7xl md:text-9xl">{props.name}</h1>
    </div>
  )
}