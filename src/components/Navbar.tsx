import React, { useState } from "react";
import Expandable, { ExpandableContext } from "../common/Expandable/Menu";
import { CSSTransition } from "react-transition-group";
import "../common/index.css";

const Navbar = () => {
  const [turnState, setTurnState] = useState(false);
  const [inProp, setInProp] = useState(false);

  return (
    <div className="fixed w-full h-1/6 top-10 right-5">
      <div className="h-1/6 grid grid-cols-1 grid-rows-2 place-items-end">
        <Expandable
          onExpanded={(v) => {
            throw new Error(`Value of ${v}. Function not implemented.`);
          }}
        >
          <ExpandableContext.Consumer>
            {({ expanded, toggleExpand }) => (
              <Expandable.Icon>
                {
                  <button
                    onClick={
                      turnState
                        ? () => {}
                        : () => {
                            setTurnState(true);
                            toggleExpand();
                            setInProp(expanded ? false : true);
                          }
                    }
                    onAnimationEnd={() =>
                      setTimeout(() => setTurnState(false), 10)
                    }
                    className={`${turnState && "animate-turn360"}
                        text-7xl float-right pr-1 z-10`}
                  >
                    {expanded ? "‒" /* it's the figure dash */ : "+"}
                  </button>
                }
              </Expandable.Icon>
            )}
          </ExpandableContext.Consumer>
          <CSSTransition
            in={inProp}
            timeout={4000}
            classNames="bodyTransition"
            unmountOnExit
          >
            <Expandable.Body
              key="body"
              style="bg-red-200 opacity-70 text-right mt-auto "
            >
              <p className="p-2">
                Want to adopt a pet? Try on{" "}
                <a className="underline" href="https://www.petfinder.com/">
                  petfinder
                </a>
              </p>
            </Expandable.Body>
          </CSSTransition>
        </Expandable>
      </div>
    </div>
  );
};

export default Navbar;
