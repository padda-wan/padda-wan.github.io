import { createContext, useState } from "react";

export const MenuContext = createContext({
  "navigating": false,
  "setNavigating": () => { },
});

export function MenuProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigating, setNavigating] = useState(false)

  return (
    <MenuContext.Provider value={{ navigating, setNavigating }}>
      {children}
    </MenuContext.Provider>
  )
}
