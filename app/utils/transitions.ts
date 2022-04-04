import anime from "animejs";

export const transitionTimingIn = 200;
export const transitionTimingOut = 200;

export function transitionOut() {
  const tl = anime.timeline()

  tl.add({
    targets: "#content",
    opacity: 0,
    duration: transitionTimingOut,
    scale: [1, 0.90],
    easing: "linear",
  });
  tl.add({
    targets: '#loader-container',
    opacity: 1,
    duration: 0
  })
}

export function transitionIn() {
  const tl = anime.timeline();
  
  tl.add({
    targets: '#loader-container',
    opacity: 0,
    duration: 0,
  })
  tl.add({
    targets: "#content",
    opacity: 1,
    duration: transitionTimingIn,
    scale: [0.90, 1],
    easing: "linear",
  });

  tl.finished
  .then( () => {
    const contenContainer = document.querySelector('#content') as HTMLElement;
    if(!contenContainer) return;
    contenContainer.style.transform = 'initial'
  })
}
