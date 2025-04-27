import { createContext } from "react";

export const MenuContext = createContext({
  "navigating": false,
  "setNavigating": () => { },
});

