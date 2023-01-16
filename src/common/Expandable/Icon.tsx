import * as React from "react";

interface Props {
  style?: string;
  children: React.ReactNode;
}

const Icon = ({ style = "", children }: Props) => {
  return <div className={style}>{children}</div>;
};

export default Icon;
