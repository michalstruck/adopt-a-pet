import React, { useContext, useState } from "react";
import { ExpandableContext } from "./Menu";

interface Props {
  style: string;
}

const Icon = ({ style = "" }: Props) => {
  const [turnState, setTurnState] = useState(false);
  const { expanded, toggle } = useContext(ExpandableContext);

  return (
    <>
      {expanded ? (
        <button
          onClick={() => {
            setTurnState(true);
            toggle();
          }}
          className={`${
            turnState && "animate-turn360"
          } ${style} text-7xl float-right`}
          onAnimationEnd={() => setTurnState(false)}
        >
          -
        </button>
      ) : (
        <button
          onClick={() => {
            setTurnState(true);
            toggle();
          }}
          className={`${
            turnState && "animate-turn360"
          } ${style}text-7xl float-right`}
          onAnimationEnd={() => setTurnState(false)}
        >
          +
        </button>
      )}
    </>
  );
};

export default Icon;
