export const ReactView = () => {
    return <h4>Hello, React!</h4>;
  };

import { createContext } from "react";
import { App } from "obsidian";

export const AppContext = createContext<App | undefined>(undefined);
