'use client'
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={path}
        initial={{ display: "none" }}
        animate={{ display: "block" }}
        exit={{ display: "none" }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 80,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
