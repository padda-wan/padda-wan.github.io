import Layout from "@/components/Layout";
import NavLink from "@/components/Navlink";
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/lib/animations';

const links = [
  { link: "/about", title: "About" },
  { link: "/experience", title: "Experience" },
  { link: "/projects", title: "Projects" },
  { link: "/contact", title: "Contact" },
]

export default function Home() {
  return (
    <Layout>
      <div className="tracking-widest text-zinc-400">
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) =>
            <motion.li className='menuLink' key={link.title} variants={itemVariants}>
              <NavLink title={link.title} link={link.link} />
            </motion.li>
          )}
        </motion.ol>
      </div>
    </Layout>
  );
}
