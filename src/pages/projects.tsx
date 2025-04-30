import Layout from "@/components/Layout"
import Projects from "../../public/projects.json"
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className="text-xl">
        {
          Projects.map(p => {
            return (
              <ul key={p.name}>
                <li><h1 className="font-extrabold">{p.name}</h1></li>
                <li>{p.description}</li>
                <li><Link href={p.link} className="text-red-500 underline" >{p.link}</Link></li>
              </ul>
            )
          })
        }
      </div>
    </Layout >
  );
}
