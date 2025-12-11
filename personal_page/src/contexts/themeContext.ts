import { createContext } from "react";
import type { themeType } from "../App";

export const ThemeContext = createContext<[themeType, React.Dispatch<React.SetStateAction<themeType>>]>(
    ['dark', () => {}]
);