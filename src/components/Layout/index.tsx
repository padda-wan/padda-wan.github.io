import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import "@/styles/globals.css";
import { useEffect, useState } from 'react';

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

const LineTransition = {
  default: { ease: "linear" },
  layout: { duration: 0.3 }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const [transition, setTransition] = useState(false)
  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <html lang="en">
      <body className={`${bebasNeu.variable}`}>
        <div className='grid grid-cols-5 grid-rows-5 auto-rows-auto auto-cols-auto h-screen'>
          <LayoutGroup>
            <AnimatePresence mode="wait" initial={true}>
              <motion.div
                className='z-2 col-start-1 col-end-6 row-start-1 row-end-6 border-t-4'
                layout
                style={{ gridRowStart: transition ? '5' : '1' }}
                exit={{ gridRowStart: transition ? '1' : '5' }}
              ></motion.div>
              <motion.div
                className='bg-white col-start-1 col-end-6 row-start-1 row-end-6'
                layout
                style={{ gridRowStart: transition ? '5' : '1' }}
                exit={{ gridRowStart: transition ? '5' : '5' }}
              ></motion.div>
              <motion.div
                className='z-2 col-start-1 col-end-6 row-start-1 row-end-6 border-r-4'
                layout
                style={{ gridColumnEnd: transition ? '1' : '6' }}
                exit={{ gridColumnEnd: transition ? '6' : '1' }}
              ></motion.div>
              <motion.div
                className='bg-white col-start-1 col-end-6 row-start-1 row-end-6'
                layout
                style={{ gridColumnEnd: transition ? '1' : '6' }}
                exit={{ gridColumnEnd: transition ? '6' : '1' }}
              ></motion.div>
              <main className='col-start-2 col-end-5 row-start-2 row-end-5 border-t-4 border-r-4 p-20 overflow-y-auto'>
                {children}
              </main>
              <div className='col-start-2 col-end-3 row-start-5 row-end-5 -x-20 z-3'>
                {
                  path !== '/' ? (
                    <Link href={'/'}>Back</Link>
                  ) : (
                    ''
                  )
                }
              </div>
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </body>
    </html >
  );
}
