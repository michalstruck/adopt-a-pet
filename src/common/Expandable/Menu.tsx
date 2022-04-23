import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import Header from "./Header";
import Icon from "./Icon";
import Body from "./Body";

interface Props {
  children: any;
  onExpand: (v: boolean) => void;
}
export const ExpandableContext = createContext<{
  expanded: boolean;
  toggleExpand: () => void | React.ReactNode;
}>({
  expanded: false,
  toggleExpand: () => {},
});

const Expandable = ({ children, onExpand }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevExpanded) => !prevExpanded);
  const value = useMemo(
    () => ({ expanded, toggleExpand }),
    [expanded, toggleExpand]
  );

  // const componentJustMounted = useRef(true);
  // useEffect(() => {
  //   // if (!componentJustMounted) {
  //   //   onExpand(expanded);
  //   // }
  //   componentJustMounted.current = false;
  // }, [expanded]);
  return (
    <ExpandableContext.Provider value={value}>
      {children}
    </ExpandableContext.Provider>
  );
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
