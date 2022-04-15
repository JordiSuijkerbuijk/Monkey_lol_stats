import { useState } from 'react';
import clsx from 'clsx';

import Image from '..//image/image';
import FrameBox from '../framebox/frameBox';

import { ChampionPassive, ChampionSpell } from '../../types/champion';

type Props = {
  passive: ChampionPassive;
  abilities: ChampionSpell[];
};

function AbilityButton({
  ability,
  callBackFunction,
  imgSource,
  isActive,
}: {
  ability: ChampionPassive | ChampionSpell;
  callBackFunction: Function;
  imgSource: string;
  isActive: boolean;
}) {
  return (
    <button onClick={() => callBackFunction(ability)} className={clsx(['relative group'])}>
      <div
        className={clsx([
          'absolute top-0 left-0 w-full h-full bg-background opacity-60 transition-opacity group-hover:opacity-0',
          isActive && 'opacity-0',
        ])}
      ></div>
      <Image
        src={imgSource}
        isStatic={false}
        loadingType='lazy'
        width={64}
        height={64}
        alt={`Ability Sprite for ${ability.name}`}
      />
    </button>
  );
}

function AbilityDescription({
  ability,
  isActiveItem,
}: {
  ability: ChampionPassive | ChampionSpell;
  isActiveItem: boolean;
}) {
  // The descriptions we get from the API contain tags which can mess with our
  // styling + layout, so we strip them
  function removeTagsFromDescription(description: string) {
    return description.replace(/(<([^>]+)>)/gi, '');
  }

  return (
    <div
      className={clsx(['absolute top-0 left-0 w-full'], isActiveItem ? 'opacity-100' : 'opacity-0')}
    >
      <div className='relative'>
        <h3 className='pl-4 mb-4 overflow-hidden text-2xl text-medium font-bebas'>
          <span
            className={clsx([
              'inline-block transition-transform translate-y-full underline underline-offset-2',
              isActiveItem ? 'translate-y-0' : 'translate-y-full',
            ])}
          >
            {ability.name}
          </span>
        </h3>
        <p
          className={clsx([
            'relative pb-4 pl-4 transition-opacity delay-100 duration-300 leading-tight',
            isActiveItem ? 'opacity-100' : 'opacity-0',
          ])}
        >
          <FrameBox isActive={isActiveItem} />
          {removeTagsFromDescription(ability.description)}
        </p>
      </div>
    </div>
  );
}

export default function ChampionAbilitySection({ passive, abilities }: Props) {
  const [activeItem, setActiveItem] = useState<ChampionPassive | ChampionSpell>(passive);

  const arrayOfAllAbilities = [passive, ...abilities];

  return (
    <div>
      <h2 className='mb-8'>Abilities</h2>
      <div className='flex flex-col gap-8'>
        <div className='relative flex gap-4'>
          <AbilityButton
            ability={passive}
            callBackFunction={setActiveItem}
            imgSource={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/passive/${passive.image.full}`}
            isActive={activeItem === passive}
          />
          {Array.isArray(abilities) &&
            abilities.map((ability) => (
              <AbilityButton
                key={ability.id}
                callBackFunction={setActiveItem}
                ability={ability}
                imgSource={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ability.image.full}`}
                isActive={activeItem === ability}
              />
            ))}
        </div>
        <div className='grid gap-2 justify-items-start'>
          {/* We will render all ability descriptions, so we can animate the active one in/out, to do this we have to position absolutely so we apply a padding equal to what Riot does */}
          <ol className='relative pb-[300px] w-full max-w-prose md:pb-[250px] lg:pb-0'>
            {arrayOfAllAbilities.map((ability) => (
              <AbilityDescription
                ability={ability}
                isActiveItem={activeItem === ability}
                key={ability.name}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
