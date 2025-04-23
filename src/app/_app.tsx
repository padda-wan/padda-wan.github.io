import type { AppProps } from 'next/app'
import { AnimatePresence } from 'motion/react'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  )
}
