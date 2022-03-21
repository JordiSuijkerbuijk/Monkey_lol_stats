import anime from "animejs";

export function transitionOut() {
  anime({
    targets: "body",
    opacity: 0,
    duration: 200,
    scale: [1, 0.95],
    easing: "linear",
  });
}

export function transitionIn() {
  anime({
    targets: "body",
    opacity: 1,
    duration: 200,
    scale: [0.95, 1],
    easing: "linear",
  });
}
