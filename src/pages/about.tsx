import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="pb-10">About</h1>
      <p className="text-xl tracking-wide">
        <span className="font-semibold">
          I’ve been building systems and leading teams at scale for over a decade. I work as a Senior Full Stack Engineer and Solution Architect, focused on infrastructure work across large enterprises.
        </span>
        <br /><br />
        Most of my time is spent on what actually matters: shipping platforms that scale, getting teams unstuck, moving fast enough that decisions don’t become mistakes. I’ve integrated Adobe platforms, managed delivery for major clients, and learned what works and what doesn’t when real pressure is on.
        <br /><br />
        I’m genuinely interested in solving problems without creating three more in the process. Not just writing code, but designing systems people can maintain later. Leading teams through ambiguity. Building the right thing, not just building fast.
        <br /><br />
        I’m SAFe certified. After years in enterprise, I can spot what will last and what will become technical debt. If you need that kind of thinking on your team, reach out.
      </p>
    </Layout>
  );
}
