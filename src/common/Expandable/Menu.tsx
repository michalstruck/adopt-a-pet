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
  onExpanded: (v: boolean) => void;
}
export const ExpandableContext = createContext<{
  expanded: boolean;
  toggleExpand: () => void;
}>({
  expanded: false,
  toggleExpand: () => {},
});

//onExpanded is a function that is triggered after body element is expanded. It passes an argument determining
// whether the component is expanded (true) or collapsed (false)

const Expandable = ({ children, onExpanded }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prevExpanded) => !prevExpanded);
  const value = useMemo(
    () => ({ expanded, toggleExpand }),
    [expanded, toggleExpand]
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted) {
      onExpanded(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);

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
