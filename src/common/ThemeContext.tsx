import { createContext } from "react";

const ThemeContext = createContext<
  [string, (theme: string) => void | undefined]
>(["rgb(153 27 27)", () => undefined]);

export default ThemeContext;
