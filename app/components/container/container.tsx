import clsx from "clsx";

export default function Container({
  children,
  containerClass,
}: {
  children: React.ReactNode;
  containerClass?: string;
}) {
  return (
    <div
      className={clsx([
        "px-4 mx-auto max-w-[500px] md:max-w-[750px] lg:max-w-[1200px] xl:max-w-[1400px]",
        containerClass,
      ])}
    >
      {children}
    </div>
  );
}
