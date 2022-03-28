import Image from "../../components/image/image";
import type { ChampionDetail } from "../../types/champion";

export default function ChampionDetailHeader(props: ChampionDetail) {
  return (
    <div className="relative h-[250px] md:h-[400px] flex justify-center items-center">
      <div className="relative flex justify-center w-full h-full">
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
          alt=""
          isStatic={false}
          width={undefined}
          height={undefined}
          loadingType="eager"
          imageClass="h-full w-full object-top object-cover"
        />
        <span className="absolute top-0 left-0 w-full h-full bg-background opacity-60"></span>
      </div>
      <h1 className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bebas text-7xl md:text-9xl">
        {props.name}
      </h1>
    </div>
  );
}
