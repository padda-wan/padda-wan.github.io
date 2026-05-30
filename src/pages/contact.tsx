import Layout from "@/components/Layout"
import { motion } from 'motion/react'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Contact() {
  return (
    <Layout>
      <motion.h1 className="pb-10 text-zinc-400" variants={itemVariants} initial="hidden" animate="visible">Contact</motion.h1>
      <motion.div className="text-xl tracking-wide space-y-4 text-zinc-400" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <span className="font-semibold">LinkedIn:&nbsp;</span>
          <a href="https://www.linkedin.com/in/jason-klaaste/" className="text-orange-500 underline hover:text-orange-700">
            https://www.linkedin.com/in/jason-klaaste/
          </a>
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-semibold">Email:&nbsp;</span>
          <a href="mailto:jklaaste@gmail.com" className="text-orange-500 underline hover:text-orange-700">
            jklaaste@gmail.com
          </a>
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="font-semibold">Github:&nbsp;</span>
          <a href="https://github.com/padda-wan" className="text-orange-500 underline hover:text-orange-700">
            https://github.com/padda-wan
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
}