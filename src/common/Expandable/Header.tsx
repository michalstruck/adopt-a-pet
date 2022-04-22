import React, { useContext } from "react";
import { ExpandableContext } from "./Menu";

interface Props {
  children: React.ReactNode;
  style: string;
}

const Header = ({ children, style = "" }: Props) => {
  return <div className={style}>{children}</div>;
};
export default Header;
