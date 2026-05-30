import Layout from "@/components/Layout"
import Projects from "../../public/projects.json"
import Link from 'next/link'
import { motion } from 'motion/react'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function ProjectsPage() {
  return (
    <Layout>
      <motion.h1 className="text-zinc-400" variants={itemVariants} initial="hidden" animate="visible">Projects</motion.h1>
      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        {Projects.map(p => (
          <motion.div key={p.name} className='mb-6 pl-5 border-l-2 border-gray-400' variants={itemVariants}>
            <h2 className="text-2xl font-bold">{p.name}</h2>
            <p className='text-sm mb-3'>{p.description}</p>
            <Link href={p.link} target="_blank" className="text-orange-500 underline hover:text-red-700 text-sm">
              {p.link} →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  );
}