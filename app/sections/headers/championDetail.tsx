import Image from "../../components/image/image";
import Container from "../../components/container/container";
import Icon, { iconTypes } from '../../components/icon/icon';

import unCapitalizeString from "~/utils/unCapitalizeString";

import type { ChampionDetail } from "../../types/champion";

export default function ChampionDetailHeader(props: ChampionDetail) {
  return (
    <section className="-mb-16 lg:-mb-32">
      <div className="relative flex justify-center w-full py-12 overflow-hidden -z-10">
        {/* We render the image twice, once as a blurred out background and one in 'normal' size */}
        <div className="z-10 flex justify-center">
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
            alt=""
            isStatic={false}
            width={undefined}
            height={undefined}
            loadingType="eager"
            imageClass="object-cover w-11/12 md:w-9/12"
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
          <span className="absolute top-0 left-0 w-full h-full md:h-[calc(100%_+_12px)] bg-background opacity-60"></span>
        </div>
      </div>
      <Container containerClass="grid -translate-y-20 lg:-translate-y-36">
        <div className="relative grid gap-6 p-4 border-2 justify-self-center justify-items-center md:p-8 sm:grid-cols-2 border-secondary before:w-6 before:h-6 before:bg-background before:absolute before:-bottom-1 before:-left-1 before:-translate-x-1/2 before:translate-y-1/2 before:rotate-45 before:origin-right md:before:w-8 md:before:h-8 after:w-6 after:h-6 after:bg-background after:absolute after:-bottom-1 after:-right-1 after:rotate-45 after:origin-bottom md:after:w-8 md:after:h-8">
          <div className="text-center">
            <h1 className="font-bebas text-7xl lg:text-9xl">
              {props.name}
            </h1>
            <span className="text-lg italic md:text-2xl">{props.title}</span>
          </div>
          <div className="flex items-center gap-4">
            {Array.isArray(props.tags) && props.tags.map(championClass => {
              //The championclass is capitalized, while the icon type is lowercase, so we convert it.
              const championClassAsIconType = unCapitalizeString(championClass) as keyof typeof iconTypes;
              return <span key={championClass} className="grid justify-items-center">
                <Icon type={championClassAsIconType} className="w-12 mb-2 fill-secondary"/>
                <span>
                  {championClass}
                </span>
              </span>

            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
