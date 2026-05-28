import Layout from "@/components/Layout"

export default function Contact() {
  return (
    <Layout>
      <h1 className="pb-10">Contact</h1>
      <div className="text-xl tracking-wide space-y-4">
        <div>
          <span className="font-semibold">
            LinkedIn:&nbsp;
          </span>
          <a href="https://www.linkedin.com/in/jason-klaaste/" className="text-red-500 underline hover:text-red-700">
            https://www.linkedin.com/in/jason-klaaste/
          </a>
        </div>
        <div>
          <span className="font-semibold">
            Email:&nbsp;
          </span>
          <a href="mailto:jklaaste@gmail.com" className="text-red-500 underline hover:text-red-700">
            jklaaste@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold">
            Github:&nbsp;
          </span>
          <a href="https://github.com/padda-wan" className="text-red-500 underline hover:text-red-700">
            https://github.com/padda-wan
          </a>
        </div>
      </div>
    </Layout>
  );
}
