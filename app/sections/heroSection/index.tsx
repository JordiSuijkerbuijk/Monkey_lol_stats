import Container from "../../components/container/container";

export default function HeroSection() {
  return (
    <section className="pt-16">
      <Container>
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-center md:w-9/12">
            Get ready to{" "}
            <span className="text-tertiary whitespace-nowrap">🔥flame🔥</span>{" "}
            the boys
          </h1>
          <ul>
            <li>KDA</li>
            <li>CS per minute</li>
            <li>Kill participation</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
