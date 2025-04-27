'use client'

import type { AppProps } from "next/app";
import { useState } from "react";
import { MenuContext } from "@/providers/menu";

export default function App({ Component, pageProps }: AppProps) {

  const [navigating, setNavigating] = useState(false)

  return (
    <MenuContext.Provider value={{
      "navigating": navigating,
      "setNavigating": setNavigating
    }}>
      <Component {...pageProps} />
    </MenuContext.Provider >
  )
}
