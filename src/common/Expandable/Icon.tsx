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
          } ${style} text-7xl float-right pr-1 z-10`}
          onAnimationEnd={() => setTurnState(false)}
        >
          ‒ {/* it's the figure dash */}
        </button>
      ) : (
        <button
          onClick={() => {
            setTurnState(true);
            toggle();
          }}
          className={`${
            turnState && "animate-turn360"
          } ${style}text-7xl float-right z-10`}
          onAnimationEnd={() => setTurnState(false)}
        >
          +
        </button>
      )}
    </>
  );
};

export default Icon;
