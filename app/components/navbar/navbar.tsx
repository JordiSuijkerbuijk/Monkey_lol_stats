import TransitionOutLink from "../transitionOutLink/transitionOutLink";
import Container from "../container/container";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[60px]"></div>
      <nav className="flex bg-background fixed top-0 w-full z-[2]">
        <span className="absolute text-3xl h-[60px] flex items-center ml-2">
          <TransitionOutLink to="/" className="">
            🐒
          </TransitionOutLink>
        </span>
        <Container>
          <div className="flex space-x-4 justify-center items-center py-2 h-[60px]">
            <TransitionOutLink
              to="/clash"
              className="flex text-medium text-primary opacity-80 font-bebas tracking-wider overflow-hidden h-[20px]"
              prefetch="intent"
            >
              Clash
            </TransitionOutLink>
            <div className="h-[14px] w-[1px] bg-primary" />
            <TransitionOutLink
              to="/champions"
              className="flex text-medium text-primary opacity-80 font-bebas tracking-wider overflow-hidden h-[20px]"
            >
              Champions
            </TransitionOutLink>
            <div className="h-[14px] w-[1px] bg-primary" />
            <TransitionOutLink
              to="/stats"
              className="flex text-medium text-primary opacity-80 font-bebas tracking-wider overflow-hidden h-[20px]"
            >
              Stats
            </TransitionOutLink>
          </div>
        </Container>
      </nav>
    </>
  );
}
