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
              className="relative flex text-medium text-primary transition-color opacity-80 font-bebas tracking-wider overflow-hidden h-[20px] hover:text-secondary after:bottom-0 after:left-0 after:-scale-x-0 after:h-0.5 after:w-full after:absolute transition-transform hover:after:scale-x-100 after:bg-secondary after:transition-transform after:origin-left"
              prefetch="intent"
            >
              Clash
            </TransitionOutLink>
            <div className="h-[14px] w-[1px] bg-primary" />
            <TransitionOutLink
              to="/champions"
              className="relative flex text-medium text-primary transition-color opacity-80 font-bebas tracking-wider overflow-hidden h-[20px] hover:text-secondary after:bottom-0 after:left-0 after:-scale-x-0 after:h-0.5 after:w-full after:absolute transition-transform hover:after:scale-x-100 after:bg-secondary after:transition-transform after:origin-left"
            >
              Champions
            </TransitionOutLink>
            <div className="h-[14px] w-[1px] bg-primary" />
            <TransitionOutLink
              to="/stats"
              className="relative flex text-medium text-primary transition-color opacity-80 font-bebas tracking-wider overflow-hidden h-[20px] hover:text-secondary after:bottom-0 after:left-0 after:-scale-x-0 after:h-0.5 after:w-full after:absolute transition-transform hover:after:scale-x-100 after:bg-secondary after:transition-transform after:origin-left"
            >
              Stats
            </TransitionOutLink>
          </div>
        </Container>
      </nav>
    </>
  );
}
