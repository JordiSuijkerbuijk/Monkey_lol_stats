import clsx from "clsx";

type Props = {
  circleClass?: string;
  isActive: boolean;
};

export default function RevealCircle({ circleClass, isActive }: Props) {
  // This is a circle that can be absolutely positioned behind anything and will 'appear' when it is hovered.
  return (
    <svg viewBox="-2 -2 104 104" className={`${circleClass} group `}>
      <circle
        cx="50"
        cy="50"
        r="50"
        stroke="#FFA62B"
        strokeWidth="2"
        fill="none"
        strokeDasharray="1 1"
        strokeDashoffset="1"
        pathLength="1"
        className={clsx([
          "transition-all duration-300 group-hover:[stroke-dashoffset:0]",
          isActive && "[stroke-dashoffset:0]",
        ])}
      ></circle>
    </svg>
  );
}
