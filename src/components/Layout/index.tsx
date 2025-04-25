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
        </div>
      </body>
    </html>
  );
}
