import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from 'motion/react'
import "@/styles/globals.css";

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
  return (
    <html lang="en">
      <body className={`${bebasNeu.variable}`}>
        <div className='grid grid-cols-5 grid-rows-5 auto-rows-auto auto-cols-auto h-screen'>
          {/* borders */}
          <div className='col-start-2 col-span-3 row-start-2 row-span-3 border-l-4 border-b-4 self-end h-full'></div>
          <motion.div
            className='col-start-2 col-span-3 row-start-2 row-span-3 border-4 self-end h-full flex justify-end'
            initial={{ height: 'auto', width: '2.6%' }}
            animate={{ height: '100%', width: '100%' }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.3, 1],
            }}
          >
            <div className='border-10 border-red-500 h-0 w-0'></div>
          </motion.div>
          <motion.main className='col-start-2 col-span-3 row-start-2 row-span-3 border-4 border-transparent self-end h-full'>
            {/* main container */}
            <p>test</p>
          </motion.main>
          {/* borders */}
          <div className='col-start-2 col-span-1 row-start-5 row-span-1 border-l-4'></div>
          <div className='col-start-2 col-span-1 row-start-1 row-span-1 border-l-4'></div>
          <div className='col-start-1 col-span-1 row-start-4 row-span-1 border-b-4'></div>
          <div className='col-start-5 col-span-1 row-start-4 row-span-1 border-b-4'></div>
          <div></div>
          <div></div>
        </div>
      </body>
    </html>
  );
}
