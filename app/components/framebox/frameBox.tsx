import clsx from 'clsx';

type Props = {
  boxClass?: string,
  isActive: boolean
}

export default function FrameBox({boxClass, isActive}: Props){
  return (
    <div className={clsx([`absolute left-0 bottom-0 h-full w-6/12`, boxClass && boxClass])}>
      {/* Vertical line */}
      <div className="absolute top-0 left-0 h-full">
        <div className={clsx([`absolute flex items-center h-full left-0 transition-all origin-top duration-300`, isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"])}>
          {/* Left-most line */}
          <div className='w-0.5 h-full bg-primary'></div>
          {/* Container for the tacked on lines on the right of the vertical line */}
          <div className="flex flex-col justify-between w-0.5 h-full">
            {/* Top-most protrustion */}
            <div className="relative w-0.5 mt-0.5 h-2/6 bg-primary">
              {/* Top-triangle */}
              <span className="absolute top-0 -translate-y-full border border-l-primary border-b-primary border-r-transparent border-t-transparent"></span>
              {/* Bottom-triangle */}
              <span className="absolute bottom-0 translate-y-full border border-l-primary border-b-transparent border-r-transparent border-t-primary"></span>
            </div>
            {/* Bottom protrusion */}
            <div className="relative w-0.5 h-2/6 bg-primary">
              {/* Top-triangle */}
              <span className="absolute top-0 -translate-y-full border border-l-primary border-b-primary border-r-transparent border-t-transparent"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5">
        <div className={clsx([`absolute flex flex-col-reverse items-center left-0 w-full transition-all origin-left delay-300 duration-300`, isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"])}>
          {/* Bottom-most line with triangles */}
          <div className="relative w-full h-0.5 bg-primary">
            <span className="absolute top-0 right-0 inline-block translate-x-full border border-l-primary border-b-primary border-t-transparent border-r-transparent"></span>
          </div>
          {/* Protrusion of bottom horizontal line */}
          <div className="relative w-6/12 h-0.5 bg-primary ">
            {/* Left-triangle */}
            <span className="absolute top-0 left-0 inline-block -translate-x-full border border-r-primary border-b-primary border-l-transparent border-t-transparent"></span>
            {/* right-triangle */}
            <span className="absolute top-0 right-0 inline-block translate-x-full border border-r-transparent border-b-primary border-l-primary border-t-transparent"></span>
          </div>
        </div>
      </div>
    </div>
  )
}