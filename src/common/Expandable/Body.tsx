import * as React from "react";
import { useContext } from "react";
import { config, useTransition, animated } from "@react-spring/web";
import { ExpandableContext } from "./Menu";
interface Props {
  children: React.ReactNode;
  style: string;
}
const Body = ({ children, style = "" }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  const transitions = useTransition(expanded, {
    from: { opacity: 0, transform: "translateX(-5rem)", translateY: "5rem" },
    enter: { opacity: 0.7, transform: "translateX(0)", translateY: "0rem" },
    leave: { opacity: 0, transform: "translateX(-5rem)", translateY: "5rem" },
    config: config.molasses,
  });

  return transitions(
    (transitionStyles, item) =>
      item && (
        <animated.div
          key="animationDiv"
          style={transitionStyles}
          className={style}
        >
          {children}
        </animated.div>
      )
  );
};

export default Body;
