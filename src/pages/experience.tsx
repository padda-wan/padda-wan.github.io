import Layout from '@/components/Layout'
import experience from '../../experience.json'

export default function About() {
  return (
    <Layout>
      {
        experience.experience.map(exp => {
          return (
            <div className=''>
              <div>{exp.company}</div>
              <div>{exp.company}</div>
              <div>{exp.company}</div>
            </div>
          )
        })
      }
    </Layout>
  );
}
