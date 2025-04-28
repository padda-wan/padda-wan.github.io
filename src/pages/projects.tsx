import Layout from "@/components/Layout"
import Projects from "../../public/projects.json"

export default function About() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className="text-xl">
        {
          Projects.map(p => {
            return (
              <ul key={p.name}>
                <li><h1>{p.name}</h1></li>
                <li>{p.description}</li>
                <li>{p.link}</li>
              </ul>
            )
          })
        }
      </div>
    </Layout>
  );
}
