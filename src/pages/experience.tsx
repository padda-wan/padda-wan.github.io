import Layout from '@/components/Layout'
import { experience } from '../../experience.json'

export default function About() {
  return (
    <Layout>
      <h1>experience</h1>
      {
        experience.map((exp) => {
          return (
            <>
              <h2 className='text-2xl font-bold'>{exp.company}</h2>
              <p className='text-sm font-bold'>{exp.role}</p>
              <p className='text-sm pl-5'>{exp.achievements}</p>
            </>
          )
        })
      }
    </Layout>
  );
}
