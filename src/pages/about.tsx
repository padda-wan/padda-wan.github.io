import Layout from "@/components/Layout";
import { motion } from 'motion/react';

const slideIn = { duration: 0.25, ease: [0.2, 0, 0, 1] as const };

export default function About() {
  return (
    <Layout>
      <motion.h1
        className="pb-10"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={slideIn}
      >
        About
      </motion.h1>
      <motion.p
        className="text-xl tracking-wide text-zinc-400"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...slideIn, delay: 0.5 }}
      >
        <span className="font-semibold">
          I&apos;ve been building systems and leading teams at scale for over a decade. I work as a Senior Full Stack Engineer and Solution Architect, focused on infrastructure work across large enterprises.
        </span>
        <br /><br />
        Most of my time is spent on what actually matters: shipping platforms that scale, getting teams unstuck, moving fast enough that decisions don&apos;t become mistakes. I&apos;ve integrated Adobe platforms, managed delivery for major clients, and learned what works and what doesn&apos;t when real pressure is on.
        <br /><br />
        I&apos;m genuinely interested in solving problems without creating three more in the process. Not just writing code, but designing systems people can maintain later. Leading teams through ambiguity. Building the right thing, not just building fast.
        <br /><br />
        I&apos;m SAFe certified. After years in enterprise, I can spot what will last and what will become technical debt. If you need that kind of thinking on your team, reach out.
      </motion.p>
    </Layout>
  );
}