import * as React from "react";
import { useState } from "react";
import Expandable, { ExpandableContext } from "../common/Expandable/Menu";
import { Link } from "react-router-dom";
import { useRandomPetId } from "../common/hooks";
import "../common/index.css";
import Divider from "./Divider";

const Navbar = () => {
  const [turnState, setTurnState] = useState(false);
  const { randomize, randomPetId } = useRandomPetId();

  return (
    <div className="fixed w-auto h-0 top-0 right-5 z-10">
      <div className="flex flex-col justify-start self-start">
        <Expandable
          onExpanded={(onExpandedEvent) => console.log({ onExpandedEvent })}
        >
          <ExpandableContext.Consumer>
            {({ expanded, toggleExpand }) => (
              <Expandable.Icon>
                {
                  <button
                    onClick={
                      turnState
                        ? () => undefined
                        : () => {
                            setTurnState(true);
                            toggleExpand();
                          }
                    }
                    onAnimationEnd={() =>
                      setTimeout(() => setTurnState(false), 10)
                    }
                    className={`${turnState ? "animate-turn360" : ""}
                text-7xl float-right`}
                  >
                    {expanded ? "‒" /* it's the figure dash */ : "+"}
                  </button>
                }
              </Expandable.Icon>
            )}
          </ExpandableContext.Consumer>
          <Expandable.Body
            key="body"
            tailwindStyle="bg-red-200 opacity-70 text-right mt-auto "
          >
            <div className="text-left p-3">
              <h1 className="text-4xl font-semibold">Quick start</h1>
              <br />
              <section>
                <div className="text-3xl">
                  Feeling lucky? Try a{" "}
                  <button className="w-fit">
                    <Link
                      to={`/details/${randomPetId}`}
                      className="flex underline decoration-1"
                      onClick={randomize}
                    >
                      random pet.
                    </Link>
                  </button>
                </div>
                <div className="w-4/5 mt-3 mb-1">
                  <Divider />
                </div>
                <div className="text-3xl">
                  Check out our cutest pets
                  <div className="flex flex-col">
                    <Link
                      to={`/details/${0}`}
                      className="flex pl-4 underline decoration-1"
                    >
                      - Gizela
                    </Link>
                    <Link
                      to={`/details/${5}`}
                      className="flex pl-4 underline decoration-1"
                    >
                      - Sudo
                    </Link>
                    <Link
                      to={`/details/${4}`}
                      className="flex pl-4 underline decoration-1"
                    >
                      - Beam
                    </Link>
                  </div>
                </div>
                <div className="w-4/5 mt-3 mb-1">
                  <Divider />
                </div>
                <footer className="text-lg">
                  Want to adopt a real pet? Try on{" "}
                  <a className="underline" href="http://www.petfinder.com/">
                    petfinder
                  </a>
                </footer>
              </section>
            </div>
          </Expandable.Body>
        </Expandable>
      </div>
    </div>
  );
};

export default Navbar;
