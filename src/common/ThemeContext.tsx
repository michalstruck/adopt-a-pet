import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "rgb(153 27 27)",
  () => {},
]);

export default ThemeContext;
