import { useEffect, useState, useRef } from 'react';
import { ChampionSkin } from '../../types/champion'
import anime from 'animejs';

import Image from '../../components/image/image'

import calculateRealImageHeight from '../../utils/calculateRealImageHeight';
import { debounce } from "debounce";

type Props = {
  skins: ChampionSkin[],
  championId: string,
  championName: string
}

export default function ChampionSkinSection({skins, championId, championName}: Props) {
  const [sectionHeight, setsectionHeight] = useState(0);

  const timeline = useRef() as React.MutableRefObject<anime.AnimeTimelineInstance>;
  const contentContainer = useRef() as React.MutableRefObject<HTMLElement>;
  const skinsContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const currentSectionHeight = useRef(0) as React.MutableRefObject<number>;

  useEffect(() => {
    //The section height is needed to create an anime timeline
    calculateSectionHeight();
    createAnimationTimeline();
    
    window.addEventListener('resize', debounce(calculateSectionHeight, 200));
    window.addEventListener('scroll', moveInTimeline)

    return () => {
      window.removeEventListener('resize', debounce(calculateSectionHeight, 200))
      window.removeEventListener('scroll', moveInTimeline)
    }
  }, [])

  function calculateSectionHeight(){
    // First we need to find out the total height of the section, because we
    // position every skin image in grid position 1,1. After that, we create a
    // timeline and animate through it depending on the scroll position.
    if(!Array.isArray(skins) || contentContainer.current === null) return;

    // We know the aspect ratio of the skins, so if we have a smaller screen
    // than the width of a skin, we have to calculate the height of a single
    // image and multiply it by the amount of skins. The single image height is
    // calculated by using the aspect ratio and multiplying that by the screen
    // width (Which is how wide the image will be).
    const imageHeight = 717;
    const imageWidth = 1215;
    let sectionHeight = 0;
    if(window.innerWidth >= 1215) {
      sectionHeight = skins.length * imageHeight;
    } else {
      //This will be the rendered height of an image if the width is smaller
      //than its full width (so it will be resized)
      const singleImageRealHeight = calculateRealImageHeight(imageHeight, imageWidth, window.innerWidth)
      sectionHeight = singleImageRealHeight * skins.length;
    }

    // We only need the timeline on bigger screens. On smaller screens, we also
    // need to keep in mind the spacing between the skins.
    if(window.innerWidth >= 1024 && !timeline.current) {
      createAnimationTimeline();
    }
    else {
      //amount of rems * rem base unit * amount of times gap is applied
      const amountRems = window.innerWidth <= 767 ? 2 : 4;
      const mobileSpacing = amountRems * 16 * (skins.length - 1);
      sectionHeight = sectionHeight + mobileSpacing;
    }

    currentSectionHeight.current = sectionHeight;
    setsectionHeight(sectionHeight)
  }

  function createAnimationTimeline(){
    if(window.innerWidth <= 1023) return;
    console.log('hi')
    const tl = anime.timeline({autoplay: false});

    for(let i = 1; i < skinsContainerRef.current.children.length; i ++) {
      tl.add({
        targets: skinsContainerRef.current.children[i],
        opacity: [0, 1],
        translateY: [100, 0],
        scale: [0.9, 1],
        duration: 350,
        delay: 650,
        easing: 'linear'
      })
    }

    timeline.current = tl;
  }

  function moveInTimeline() {
    if(!timeline || !timeline.current || !contentContainer || !contentContainer.current || !currentSectionHeight || !currentSectionHeight.current || !Array.isArray(skins)) return;
    if(window.innerWidth < 1024) return
    //When the user scrolls, we need to move them along in the animation
    //timeline. We will calculate the % that the user has scrolled within this
    //section, and then move to that point of the timeline.

    // First we get the y value at which the section starts, then we get the
    // current scroll position. If its smaller than start position we can
    // return, because we don't want to play any part of the animation just yet.
    const startOfSection = contentContainer.current.offsetTop;
    const userYPosition = document.documentElement.scrollTop;

    if(userYPosition < startOfSection) return;

    const scrolledInSectionAmount = userYPosition - startOfSection;

    // We want the timeline to be completed once the user scrolls to a point
    // where the top of the last image touches the top of the viewport, not when
    // the bottom of the last image does so.


    // We want the timeline to start when the user first 'locks' the first skin
    // to the top of the page, but the timeline should not take the amount of
    // pixels of the height of this section, because we want the animation to
    // finish once the user 'locks' the last skin onto the top of their page. 
    const pixelAmountInTimeline = currentSectionHeight.current - window.innerHeight; 

    // We then calculate the % of pixels the user has scrolled through, keeping
    // in mind that we don't actually animate through the whole section, but
    // rather we animate through the section untill the last image is locked into place.
    const percentageScrolled = scrolledInSectionAmount / pixelAmountInTimeline;


    // Due to the way the scroll position works, it is possible our percentage
    // jumps from 0.99 to 1.02 for example. Because we want to make sure the
    // animation has played, we check if the percentage is higher than 
    timeline.current.seek(timeline.current.duration * percentageScrolled)
  }

  return (
    <section className="relative" style={{height: `${sectionHeight}px`}} ref={contentContainer}>
      <div className={`sticky top-[var(--nav-height)] lg:h-[calc(100vh_-_var(--nav-height))] grid gap-8 md:gap-16 lg:gap-0`} ref={skinsContainerRef}>
        {Array.isArray(skins) && skins.map((skin, i) => {
          const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`
          return (
            <div className={`relative lg:grid lg:items-center lg:col-start-1 lg:row-start-1`} style={{ zIndex: `${i}`}}key={skin.id}>
              <div className="absolute top-0 bottom-0 left-0 right-0 hidden h-screen lg:block">
                <Image src={imageUrl} alt="" isStatic={false} loadingType={"lazy"} width={1215} height={717} imageClass="h-full w-full object-cover blur-md grayscale-[60%]"/>
              </div>
              <div className="grid justify-center">
                <div className="relative">
                  <Image src={imageUrl} alt={skin.name} isStatic={false} loadingType={"lazy"} width={1215} height={717} />
                  <span className="absolute bottom-0 left-0 px-8 py-4 font-semibold bg-background/80 text-secondary">
                    {i === 0 ? championName : skin.name}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}