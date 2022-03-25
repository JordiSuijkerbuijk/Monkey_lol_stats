import clsx from "clsx";
import { useState } from "react";

import Icon from "../icon/icon.jsx";
import RevealCircle from "../revealCircle/revealCircle";

const classes: string[] = [
  "assasin",
  "fighter",
  "mage",
  "marksman",
  "support",
  "tank",
];

type classIconProps = {
  name: string;
  isActiveClass: boolean;
  filterCallback: Function;
};

const ClassIcon = ({ name, isActiveClass, filterCallback }: classIconProps) => {
  return (
    <button
      className={clsx([
        "relative w-16 p-4 transition-opacity group fill-primary opacity-60 hover:opacity-100",
        isActiveClass && "opacity-100",
      ])}
      onClick={() => filterCallback(name)}
    >
      <RevealCircle
        circleClass="absolute top-0 left-0 w-full h-full"
        isActive={isActiveClass}
      />
      <Icon
        type={name}
        className={clsx([
          "transition-colors transition-transform duration-300 scale-100 fill-primary group-hover:fill-secondary group-hover:scale-110",
          isActiveClass && "fill-secondary scale-110",
        ])}
      />
    </button>
  );
};

export default function classFilterFunction() {
  const [filteredClass, setFilteredClass] = useState("");

  function changeFilterType(championClass: string) {
    if (filteredClass === championClass) {
      setFilteredClass("");
    } else {
      setFilteredClass(championClass);
    }
  }

  return (
    <div className="grid content-center grid-cols-6 justify-items-center">
      {Array.isArray(classes) &&
        classes.map((championClass) => (
          <ClassIcon
            key={championClass}
            name={championClass}
            isActiveClass={filteredClass === championClass}
            filterCallback={changeFilterType}
          />
        ))}
    </div>
  );
}
