import { config, useTransition, animated } from "@react-spring/web";
import React, { useContext } from "react";
import { ExpandableContext } from "./Menu";
interface Props {
  children: React.ReactNode;
  style: string;
}
const Body = ({ children, style = "" }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  const transitions = useTransition(expanded, {
    from: { opacity: 0 },
    enter: { opacity: 0.7 },
    leave: { opacity: 0 },
    delay: 10,
    config: config.molasses,
  });

  return expanded
    ? transitions(
        (transitionStyles, item) =>
          item && (
            <animated.div style={transitionStyles} className={style}>
              {children}
            </animated.div>
          )
      )
    : null;
};

export default Body;
