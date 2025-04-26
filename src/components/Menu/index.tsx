import Link from 'next/link'
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from 'motion/react'
import { MenuContext } from '@/providers/menu';
import { useEffect, useState, useContext } from 'react';

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
  const router = useRouter();

  useEffect(() => {
    setNavigating(true)
  }, [])

  const navigate = (event: any) => {
    event.preventDefault()
    setNavigating(false)
    setTimeout(() => {
      router.push('/');
    }, durationSeconds * 1000);
  }

  return (
    <div className='grid grid-cols-5 grid-rows-5 auto-rows-auto auto-cols-auto h-screen'>
      <motion.div
        className='z-2 col-start-1 col-end-6 row-start-1 row-end-6 border-t-4'
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
        className='z-2 col-start-1 col-end-6 row-start-1 row-end-6 border-r-4'
        layout
        transition={crosshairTransition}
        style={{ gridColumnEnd: navigating ? '1' : '6' }}
      />
      <motion.div
        className='bg-white col-start-1 col-end-6 row-start-1 row-end-6'
        layout
        transition={crosshairTransition}
        style={{ gridColumnEnd: navigating ? '1' : '6' }}
      />
      <main className='col-start-2 col-end-5 row-start-2 row-end-5 border-t-4 border-r-4 p-20 overflow-y-auto'>
        {children}
      </main>
      <div className='col-start-2 col-end-3 row-start-5 row-end-5 -x-20 z-2'>
        {path !== '/' && <Link href={'/'} onNavigate={navigate}>Back</Link>}
      </div>
    </div>
  );
}
