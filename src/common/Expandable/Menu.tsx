import React, {
  createContext,
  useState,
  useCallback,
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
export const ExpandableContext = createContext({
  expanded: false,
  toggle: () => {},
});
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const componentJustMounted = useRef(true);
  useEffect(() => {
    // if (!componentJustMounted) {
    //   onExpand(expanded);
    // }
    componentJustMounted.current = false;
  }, [expanded]);
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  return <Provider value={value}>{children}</Provider>;
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
