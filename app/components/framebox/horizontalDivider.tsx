import clsx from "clsx";

type Props = {
  lineClass?: string;
};

export default function HorizontalDivider({ lineClass }: Props) {
  return (
    <div className={clsx(["w-full flex flex-col", lineClass && lineClass])}>
      {/* Top Protrusions */}
      <div className="flex justify-center">
        {/* Top-left */}
        <span className="relative h-0.5 w-1/5 bg-primary translate-x-0.5">
          {/* Left-triangle */}
          <span className="absolute top-0 -left-0.5 border border-r-primary border-b-primary border-l-transparent border-t-transparent"></span>
          {/* Right-triangle */}
          <span className="absolute top-0 -right-0.5 border border-r-transparent border-b-primary border-l-primary border-t-transparent"></span>
        </span>
      </div>

      {/* Main line */}
      <div className="w-full h-0.5 bg-primary"></div>

      {/* Bottom Protrusions */}
      <div className="flex justify-center">
        {/* Bottom-left */}
        <span className="relative h-0.5 w-1/5 bg-primary translate-x-0.5">
          {/* Left-triangle */}
          <span className="absolute top-0 -left-0.5 border border-r-primary border-b-transparent border-l-transparent border-t-primary"></span>
          {/* Right-triangle */}
          <span className="absolute top-0 -right-0.5 border border-r-transparent border-b-transparent border-l-primary border-t-primary"></span>
        </span>
      </div>
    </div>
  );
}
