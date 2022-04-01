import Image from "../../components/image/image";
import Container from "../../components/container/container";
import Icon, { iconTypes } from '../../components/icon/icon';

import unCapitalizeString from "~/utils/unCapitalizeString";

import type { ChampionDetail } from "../../types/champion";

export default function ChampionDetailHeader(props: ChampionDetail) {
  console.log(props)
  return (
    <div>
      <div className="relative flex justify-center w-full h-full py-12 overflow-hidden">
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
      <Container containerClass="grid">
        <div className="relative grid gap-6 p-4 border-2 justify-self-center justify-items-center md:p-8 sm:grid-cols-3 border-secondary after:w-4 after:h-4 after:absolute after:top-0 after:right-0 after:bg-background after:translate-x-2px after:-translate-y-2px before:absolute before:w-4 before:h-4 before:bottom-0 before:left-0 before:bg-background before:-translate-x-2px before:translate-y-2px md:after:w-8 md:after:h-8 md:before:w-8 md:before:h-8">
          <div className="text-center">
            <h1 className="font-bebas text-7xl md:text-9xl">
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
          <div className="grid items-center grid-cols-4 gap-4">
            {props.info?.attack && <span className="w-6 text-center fill-primary" title="Attack">
              <Icon type="fist" />
              {props.info.attack}
            </span>}
            {props.info?.magic && <span className="w-6 text-center fill-primary" title="Magic">
              <Icon type="wand" />
              {props.info.magic}
            </span>}
            {props.info?.defense && <span className="w-6 text-center fill-primary" title="Defense">
              <Icon type="shield" />
              {props.info.defense}
            </span>}
            {props.info?.difficulty && <span className="w-6 text-center fill-primary" title="Difficulty">
              <Icon type="schoolcap" />
              {props.info.difficulty}
            </span>}
          </div>
        </div>
      </Container>
    </div>
  );
}
