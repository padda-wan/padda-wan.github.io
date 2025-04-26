import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from 'motion/react'
import "@/styles/globals.css";
import { useEffect, useState } from 'react';

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

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
          <motion.div
            // initial grid-row-start: 1
            // animate grid-row-start: 5
            className='bg-white col-start-1 col-end-6 row-start-1 row-end-6 border-t-4'
            layout
            style={{ gridRowStart: transition ? '5' : '1' }}
          ></motion.div>
          <motion.div
            className='bg-white col-start-1 col-end-6 row-start-1 row-end-6 border-r-4'
            layout
            style={{ gridColumnEnd: transition ? '1' : '6' }}
          ></motion.div>
          <div className='col-start-2 col-end-5 row-start-2 row-end-5 border-t-4 border-r-4 p-4'>
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum ante nulla, nec facilisis diam ultricies id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus lectus vitae quam placerat sodales. Nam eget tellus non odio faucibus tempus. Sed venenatis tellus porta dignissim iaculis. Vivamus sit amet magna erat. Donec sagittis in diam et efficitur. In elementum, erat ac viverra elementum, risus lectus viverra nulla, et molestie eros ipsum in mauris. Morbi elementum at odio a fermentum. In non erat dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer convallis congue molestie. Sed ut mauris in ex interdum cursus. Ut sodales ac tellus quis tincidunt. Ut eget ante at velit vulputate pulvinar vitae nec urna.

          </div>
        </div>
      </body>
    </html >
  );
}
