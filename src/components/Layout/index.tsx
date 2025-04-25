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
          <motion.main className='relative col-start-2 col-span-3 row-start-2 row-span-3 border-4 border-transparent self-end h-full overflow-y-scroll'>
            {/* main container */}
            <p className='overflow-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consequat mauris. Praesent id magna ut libero feugiat lacinia. Nulla tempor, felis a tempus laoreet, mi sapien interdum purus, a egestas velit tellus tristique elit. Vivamus interdum dapibus porttitor. Sed non magna ipsum. Fusce ornare bibendum vulputate. Donec et nisl iaculis, pulvinar nisl sed, dapibus risus. Ut malesuada pellentesque mi, a fermentum nisl eleifend non. Phasellus at tempor tortor.

              Suspendisse laoreet lorem sed nisi accumsan, et convallis sem hendrerit. Morbi laoreet libero sit amet aliquam scelerisque. Nam nec metus et nisl faucibus viverra. Aenean quis nunc velit. Morbi porttitor nisl enim, quis mollis ligula semper ac. Morbi pharetra massa id neque molestie, ac dictum purus imperdiet. Nam malesuada, felis sit amet mattis lacinia, ligula nulla accumsan libero, a laoreet orci lacus quis lacus. Duis volutpat arcu non ante fringilla bibendum.

              In non venenatis ante. Nulla pretium, libero sit amet cursus vehicula, nisl arcu rhoncus ex, nec placerat sapien urna ut turpis. Duis placerat risus vitae elementum blandit. Maecenas vestibulum eget sem nec rutrum. Ut risus ipsum, mattis in commodo sed, condimentum nec nibh. Aliquam ac commodo justo, vel ornare lacus. Vestibulum sollicitudin porttitor eros, semper cursus nulla pharetra ut. Duis suscipit dapibus dolor, sed scelerisque urna maximus sagittis. Vivamus non eros at metus tempus laoreet in et justo.

              Nullam non magna ut ligula scelerisque ultrices. Sed et tempus augue, et pharetra ante. Ut blandit nibh ut sapien cursus consectetur. Duis feugiat fermentum dolor vitae lobortis. Integer lobortis nunc et lectus tincidunt semper. Nunc ut fringilla erat. Praesent lorem mi, vulputate a augue sit amet, sodales sagittis magna. Cras et tortor et leo egestas lacinia. Vivamus nec finibus justo. Aliquam magna mi, dignissim feugiat molestie at, imperdiet ut ligula.

              Donec bibendum non tortor venenatis suscipit. Ut suscipit id ligula eget tempor. Cras in metus nec velit ullamcorper suscipit id ut est. Pellentesque vulputate, velit eu semper eleifend, arcu tellus ornare ex, vel tempus orci turpis eget nisl. In sit amet tristique justo. Maecenas eget augue ultrices, vehicula leo at, lacinia nunc. Sed at enim sodales, fermentum libero quis, semper lorem. Maecenas sit amet magna metus. Sed et libero laoreet, egestas mi at, luctus ex. Mauris luctus nunc metus, nec iaculis sapien commodo ac. Aliquam ut posuere tellus. Vivamus maximus semper massa ac pretium. Proin finibus pellentesque congue. Cras ac metus vel mi feugiat aliquet. Nunc efficitur leo sed urna fermentum, a pulvinar erat lobortis. Nullam tellus augue, venenatis id suscipit eu, porttitor id lacus.
            </p>
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
