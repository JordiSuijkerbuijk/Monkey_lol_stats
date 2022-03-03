export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 mx-auto max-w-[500px] md:max-w-[750px] lg:max-w-[1200px] xl:max-w-[1400px]">
      {children}
    </div>
  );
}
