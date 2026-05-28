import Layout from "@/components/Layout"
import Projects from "../../public/projects.json"
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className="space-y-6">
        {
          Projects.map(p => {
            return (
              <div key={p.name} className='mb-6 pl-5 border-l-2 border-gray-400'>
                <h2 className="text-2xl font-bold">{p.name}</h2>
                <p className='text-sm mb-3'>{p.description}</p>
                <Link href={p.link} target="_blank" className="text-red-500 underline hover:text-red-700 text-sm">
                  {p.link} →
                </Link>
              </div>
            )
          })
        }
      </div>
    </Layout >
  );
}
