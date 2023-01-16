import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useMemo,
  ReactNode,
  useCallback,
} from "react";
import Header from "./Header";
import Icon from "./Icon";
import Body from "./Body";

export interface mainProps {
  children: ReactNode;
  onExpanded: (v: boolean) => void;
}

type ExpandableContextType = {
  expanded: boolean;
  toggleExpand: () => void | undefined;
};

export const ExpandableContext = createContext<ExpandableContextType>({
  expanded: false,
  toggleExpand: () => undefined,
});

//onExpanded is a function that is triggered after body element is expanded. It passes an argument determining
// whether the component is expanded (true) or collapsed (false)

const Expandable = ({ children, onExpanded }: mainProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
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
