import React, { useState } from "react";
import Expandable, { ExpandableContext } from "../common/Expandable/Menu";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useRandomPetId } from "../common/small_hooks";
import "../common/index.css";

const Navbar = () => {
  const [state, setState] = useState({ turnState: false, inProp: false });
  const { randomize, randomPetId } = useRandomPetId();
  console.log(randomPetId);
  return (
    <div className="fixed w-auto h-0 top-14 right-5">
      <div className="h-1/6 grid grid-cols-1 grid-rows-2 place-items-end">
        <Expandable
          onExpanded={(v) => {
            throw new Error(`Value of "${v}". Function not implemented.`);
          }}
        >
          <ExpandableContext.Consumer>
            {({ expanded, toggleExpand }) => (
              <Expandable.Icon>
                {
                  <button
                    onClick={
                      state.turnState
                        ? () => {}
                        : () => {
                            setState({ turnState: false, inProp: !expanded });
                            toggleExpand();
                          }
                    }
                    onAnimationEnd={() =>
                      setTimeout(
                        () => setState({ ...state, turnState: false }),
                        10
                      )
                    }
                    className={`${state.turnState && "animate-turn360"}
                        text-7xl float-right pr-1 z-10`}
                  >
                    {expanded ? "‒" /* it's the figure dash */ : "+"}
                  </button>
                }
              </Expandable.Icon>
            )}
          </ExpandableContext.Consumer>
          <CSSTransition
            in={state.inProp}
            timeout={200}
            classNames="bodyTransition"
          >
            <Expandable.Body
              key="body"
              style="bg-red-200 opacity-70 text-right mt-auto "
            >
              <div className="p-2 text-left">
                <section>
                  <h1 onClick={randomize} className="text-3xl">
                    {
                      <Link
                        to={`/details/${randomPetId}`}
                        className="w-100% flex overflow-hidden mt-7 pb-8 border-b-black border-b-2"
                      >
                        Random pet
                      </Link>
                    }{" "}
                    | Pet adoption site
                  </h1>
                </section>
                <p>
                  Want to adopt a pet? Try on{" "}
                  <a className="underline" href="https://www.petfinder.com/">
                    petfinder
                  </a>
                </p>
              </div>
            </Expandable.Body>
          </CSSTransition>
        </Expandable>
      </div>
    </div>
  );
};

export default Navbar;
