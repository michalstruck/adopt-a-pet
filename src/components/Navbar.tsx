import React, { useState } from "react";
import Expandable, { ExpandableContext } from "../common/Expandable/Menu";

const Navbar = () => {
  const [turnState, setTurnState] = useState(false);
  return (
    <div className="fixed w-full h-1/6 top-10 right-5">
      <div className="h-1/6 grid grid-cols-1 grid-rows-2 place-items-end">
        <Expandable
          onExpand={(v: boolean): void => {
            throw new Error("Function not implemented.");
          }}
        >
          <ExpandableContext.Consumer>
            {({ expanded, toggleExpand }) => (
              <Expandable.Icon style="">
                {expanded ? (
                  <button
                    onClick={() => {
                      setTurnState(true);
                      toggleExpand();
                    }}
                    onAnimationEnd={() => setTurnState(false)}
                    className={`${
                      turnState && "animate-turn360"
                    } text-7xl float-right pr-1 z-10`}
                  >
                    ‒ {/* it's the figure dash */}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setTurnState(true);
                      toggleExpand();
                    }}
                    onAnimationEnd={() => setTurnState(false)}
                    className={`${
                      turnState && "animate-turn360"
                    } text-7xl float-right z-10  `}
                  >
                    +
                  </button>
                )}
              </Expandable.Icon>
            )}
          </ExpandableContext.Consumer>
          <Expandable.Body style="bg-red-200 opacity-70 text-right mt-auto p-2">
            <p>
              Want to adopt a pet? Try on{" "}
              <a className="underline" href="https://www.petfinder.com/">
                petfinder
              </a>
            </p>
          </Expandable.Body>
        </Expandable>
      </div>
    </div>
  );
};

export default Navbar;
