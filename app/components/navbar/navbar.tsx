import { Link } from "remix";
import Container from "../container/container";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="relative flex justify-between items-start py-2 after:border-b-2 after:border-primary/50 after:inline-block after:w-9/12 after:h-px after:absolute after:bottom-0 after:left-1/2 after:-translate-x-2/4">
          <Link
            to="/clash"
            className="relative text-medium overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary/75 after:transition-all after:-translate-x-full hover:after:translate-x-0 hover:after:opacity-100"
          >
            Clash
          </Link>
          <span className="text-3xl">
            <Link to="/" className="">
              🐒
            </Link>
          </span>
          <Link
            to="/stats"
            className="relative text-medium overflow-hidden after:absolute after:opacity-0 after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary/75 after:transition-all after:-translate-x-full hover:after:translate-x-0 hover:after:opacity-100"
          >
            Stats
          </Link>
        </div>
      </Container>
    </nav>
  );
}
