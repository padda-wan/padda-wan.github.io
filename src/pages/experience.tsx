import Layout from '@/components/Layout'
import experience from '../../experience.json'

export default function About() {
  return (
    <Layout>
      <div>
        <div>{experience.company}</div>
        <div>{experience.company}</div>
        <div>{experience.company}</div>
      </div>
    </Layout>
  );
}
