import Layout from "@/components/Layout"

export default function About() {
  return (
    <Layout>
      <h1 className="pb-10">Contact</h1>
      <p className="text-xl tracking-wide">
        <span className="font-semibold">
          LinkedIn:&nbsp;
        </span>
        <a href="https://www.linkedin.com/in/jason-klaaste/">https://www.linkedin.com/in/jason-klaaste/</a>
        <br /><br />
        <span className="font-semibold">
          Email:&nbsp;
        </span>
        <a href="mailto:jklaaste@gmail.com">jklaaste@gmail.com</a>
        <br /><br />
        <span className="font-semibold">
          Github:&nbsp;
        </span>
        <a href="https://github.com/padda-wan">https://github.com/padda-wan</a>
      </p>
    </Layout>
  );
}
