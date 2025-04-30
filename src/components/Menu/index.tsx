import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from 'motion/react'
import { MenuContext } from '@/providers/menu';
import NavLink from '@/components/Navlink';
import { useEffect, useContext } from 'react';

const durationSeconds = 0.4
const crosshairTransition = {
  duration: durationSeconds,
  ease: [0, 0.71, 0.2, 1.01]
}

export default function Menu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navigating, setNavigating } = useContext(MenuContext)
  const path = usePathname();

  useEffect(() => {
    setNavigating(true)
  }, [setNavigating])

  return (
    <div className='grid grid-cols-5 grid-rows-5 auto-rows-auto auto-cols-auto h-screen'>
      <motion.div
        className='z-10 col-start-1 col-end-6 row-start-1 row-end-6 border-t-4 pointer-events-none'
        layout
        transition={crosshairTransition}
        style={{ gridRowStart: navigating ? '5' : '1' }}
      />
      <motion.div
        className='z-1 bg-white col-start-1 col-end-6 row-start-1 row-end-6'
        layout
        transition={crosshairTransition}
        style={{ gridRowStart: navigating ? '5' : '1', }}
      />
      <motion.div
        className='z-10 col-start-1 col-end-6 row-start-1 row-end-6 border-r-4'
        layout
        transition={crosshairTransition}
        style={{ gridColumnEnd: navigating ? '1' : '6' }}
      />
      <motion.div
        className='z-3 bg-white col-start-1 col-end-6 row-start-1 row-end-6'
        layout
        transition={crosshairTransition}
        style={{ gridColumnEnd: navigating ? '1' : '6' }}
      />
      <motion.div className="col-start-1 col-end-2 row-start-5 row-end-5 z-3 p-7 flex align-right justify-end items-start"
        layout
        transition={crosshairTransition}
        style={{ gridColumnEnd: navigating ? '1' : '6' }}
      >
        <Image
          className="flex justify-end"
          priority
          width={70}
          height={70}
          src="jk-logo.svg"
          alt="Jason Klaaste"
        />
      </motion.div>
      <main className='col-start-2 col-end-5 row-start-2 row-end-5 border-t-4 border-r-4 relative'>
        <div className="flex flex-row items-stretch h-full">
          {/* <div className="top-0 absolute border-10 right-0 border-red-500"></div> */}
          <div className="flex-none bg-black/20 w-20 border-r-4 ledger"></div>
          <div className="flex-auto overflow-y-auto p-10">
            {children}
          </div>
        </div>
      </main>
      <div className='tracking-widest col-start-2 col-end-3 row-start-5 row-end-5 -x-20 z-2 p-5'>
        {path !== '/' && <NavLink title='Back' link='/' />}
      </div>
    </div>
  );
}
