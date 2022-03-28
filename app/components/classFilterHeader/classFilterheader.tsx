import { useSearchParams, Link } from "remix";
import clsx from "clsx";

import Icon, { iconTypes } from "../icon/icon.jsx";
import RevealCircle from "../revealCircle/revealCircle";

const classes: (keyof typeof iconTypes)[] = [
  "assassin",
  "fighter",
  "mage",
  "marksman",
  "support",
  "tank",
];

type ClassIconProps = {
  name: keyof typeof iconTypes;
  isActiveClass: boolean;
};

const ClassIcon = ({ name, isActiveClass }: ClassIconProps) => {
  // We redirect with a query prop so that the loader of the page on which this filter header is present is run again.
  // That way, we can filter on the server. We also check if this class is currently active so we can remove the queryprops in that case (so we filter on nothing) 
  // The Riot API stores these types with a capital letter at the start, so we use that instead of the 'normal' name that we use for the rest of the component.

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <Link
      to={isActiveClass ? `` : `?championClass=${capitalizedName}`}
      className={clsx([
        "relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100",
        isActiveClass && "opacity-100",
      ])}
    >
      <RevealCircle
        circleClass="absolute top-0 left-0 w-full h-full"
        isActive={isActiveClass}
      />
      <Icon
        type={name}
        className={clsx([
          "transition duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110",
          isActiveClass && "fill-secondary scale-110",
        ])}
      />
    </Link>
  );
};

export default function ClassFilterFunction() {
  const [searchParams] = useSearchParams();
  const activeClass = searchParams.get("championClass")

  return (
    <div className="grid content-center grid-cols-6 justify-items-center">
      {Array.isArray(classes) &&
        classes.map((championClass) => {
          //The query params are capitalized, because Riot has it saved this way in their API, so we need to capitalize the championClass for comparison.
          const capitalizedChampClass = championClass.charAt(0).toUpperCase() + championClass.slice(1) 
          return <ClassIcon
            key={championClass}
            name={championClass}
            isActiveClass={activeClass === capitalizedChampClass}
          />
        })}
    </div>
  );
}
