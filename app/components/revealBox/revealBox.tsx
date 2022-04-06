import clsx from "clsx"

type Props = {
  boxClass?: string,
  isActive: boolean,
}

export default function RevealBox({boxClass, isActive} : Props){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.456 247.151" className={`${boxClass} group`} preserveAspectRatio="none">
      <g fill="none" strokeWidth="2" stroke="var(--secondary)">
        <path d="M134.955 1H1v245.152h133.955M134.955 246.15h133.5V1.005h-133.5"
          strokeDasharray="1 1"
          strokeDashoffset="1"
          pathLength="1"
          vectorEffect="non-scaling-stroke"
          className={clsx([
            "transition-all duration-1000 group-hover:[stroke-dashoffset:0]",
            isActive && "[stroke-dashoffset:0]"
          ])}
        />
      </g>
    </svg>
  )
}