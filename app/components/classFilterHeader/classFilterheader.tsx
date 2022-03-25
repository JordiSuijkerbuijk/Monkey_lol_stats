import Icon from "../icon/icon.jsx";
import RevealCircle from "../revealCircle/revealCircle";

export default function classFilterFunction() {
  return (
    <div className="grid content-center grid-cols-6 justify-items-center">
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="assasin"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="fighter"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="mage"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="marksman"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="support"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
      <button className="relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100">
        <RevealCircle circleClass="absolute top-0 left-0 w-full h-full" />
        <Icon
          type="tank"
          className="transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110"
        />
      </button>
    </div>
  );
}
