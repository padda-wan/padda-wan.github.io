import React, { createContext } from "react";

interface IMenuContext {
  navigating: boolean;
  setNavigating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<IMenuContext>({
  "navigating": false,
  "setNavigating": () => { },
});

