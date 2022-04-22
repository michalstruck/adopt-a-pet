import React, { useContext } from "react";
import { ExpandableContext } from "./Menu";
interface Props {
  children: React.ReactNode;
  style: string;
}
const Body = ({ children, style = "" }: Props) => {
  const { expanded } = useContext(ExpandableContext);
  return <div className={style}>{expanded ? children : null}</div>;
};

export default Body;
