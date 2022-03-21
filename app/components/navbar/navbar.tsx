import { Link, useNavigate } from "remix";
import Container from "../container/container";

import { transitionOut } from "../../utils/transitions";

export default function Navbar() {
  const navigate = useNavigate();

  function handleNavigation(e: Event, path: string) {
    e.preventDefault();
    transitionOut();
    setTimeout(() => {
      navigate(path);
    }, 200);
  }

  return (
    <>
      <div className="w-full h-[60px]"></div>
      <nav className="flex bg-background fixed top-0 w-full z-[2]">
        <span className="absolute text-3xl h-[60px] flex items-center ml-2">
          <a href="/" className="" onClick={(e) => handleNavigation(e, "/")}>
            🐒
          </a>
        </span>
        <Container>
          <div className="flex space-x-4 justify-center items-center py-2 h-[60px]">
            <a
              href="/clash"
              className="flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]"
              onClick={(e) => handleNavigation(e, "/clash")}
            >
              Clash
            </a>
            <div className="h-[14px] w-[1px] bg-primary" />
            <a
              href="/champions"
              className="flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]"
              onClick={(e) => handleNavigation(e, "/champions")}
            >
              Champions
            </a>
            <div className="h-[14px] w-[1px] bg-primary" />
            <a
              href="/stats"
              className="flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]"
              onClick={(e) => handleNavigation(e, "/stats")}
            >
              Stats
            </a>
          </div>
        </Container>
      </nav>
    </>
  );
}
