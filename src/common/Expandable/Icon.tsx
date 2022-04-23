import React from "react";

interface Props {
  style: string;
  children: React.ReactNode;
}

const Icon = ({ style = "", children }: Props) => {
  return <>{children}</>;
};

export default Icon;
