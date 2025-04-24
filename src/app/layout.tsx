'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import './globals.css'
import { motion } from 'motion/react';
import Template from './template';

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}
//
// <motion.div
//   initial={{ x: 300, opacity: 0 }}
//   animate={{ x: 0, opacity: 1 }}
//   exit={{ x: 0, opacity: 0 }}
//   transition={{
//     type: "spring",
//     stiffness: 600,
//     damping: 80,
//   }}
//

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={`${bebasNeu.variable} min-h-screen flex flex-col items-center justify-center overflow-hidden animating`}>
        <div className="h-200 w-300 text-8xl m-20 p-20 pl-28 relative border-t-4 border-r-4">
          <div className="flex absolute -bottom-26 left-4">
            <motion.div animate={{ rotate: 360 }} transition={transition}>
              <Image
                className="flex"
                priority
                width={70}
                height={70}
                src="jk-logo.svg"
                alt="Jason Klaaste"
              />
            </motion.div>
            {
              path !== '/' ? (
                <Link href={'/'}>Back</Link>
              ) : (
                ''
              )
            }
          </div>
          <main className='absolute'>
            <Template>
              {children}
            </Template>
          </main>
          <div className="bg-black/20 w-20 absolute bottom-0 left-0 border-r-4 h-full ledger"></div>
          <div className="absolute w-2000 bottom-0 -left-200 border-b-4"></div>
          <div className="absolute h-2000 -bottom-200 left-0 border-l-4"></div>
          <div className="absolute top-0 border-10 right-0 border-red-500"></div>
        </div>
      </body>
    </html>
  );
}
