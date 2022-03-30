import Image from "../../components/image/image";
import Container from "../../components/container/container";
import Icon from '../../components/icon/icon';
import type { ChampionDetail } from "../../types/champion";

export default function ChampionDetailHeader(props: ChampionDetail) {
  console.log(props)
  return (
    <div>
      <div className="relative flex justify-center w-full h-full py-12">
        {/* We render the image twice, once as a blurred out background and one in 'normal' size */}
        <div className="z-10 flex justify-center">
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
            alt=""
            isStatic={false}
            width={undefined}
            height={undefined}
            loadingType="eager"
            imageClass="object-cover w-9/12"
          />
          <span className="absolute top-0 left-0 w-full h-full bg-background opacity-20"></span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
            alt=""
            isStatic={false}
            width={undefined}
            height={undefined}
            loadingType="eager"
            imageClass="w-full h-full object-cover blur-md"
          />
          <span className="absolute top-0 left-0 w-full h-full bg-background opacity-60"></span>
        </div>
      </div>
      <Container
        containerClass="grid justify-items-center" 
      >
        <div className="text-center">
          <h1 className="font-bebas text-7xl md:text-9xl">
            {props.name}
          </h1>
          <span className="text-lg italic md:text-2xl">{props.title}</span>
        </div>
        <div>
          {Array.isArray(props.tags && props.tags.map(championClass => <Icon type={championClass} key={championClass} />))}

        </div>
      </Container>
    </div>
  );
}
