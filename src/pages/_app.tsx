'use client'

import type { AppProps } from "next/app";
import { AnimatePresence } from "motion/react"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}
