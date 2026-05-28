import Layout from '@/components/Layout'
import { experience } from '../../experience.json'
import Link from 'next/link'

export default function Experience() {
  return (
    <Layout>
      <h1 className="text-zinc-400">experience</h1>
      {
        experience.map((exp) => {
          const startDate = new Date(exp.start_date * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
          const endDate = exp.end_date ? new Date(exp.end_date * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'

          return (
            <div key={exp.company} className='mb-8 pl-5 border-l-2 border-gray-400'>
              <h2 className='text-2xl font-bold'>{exp.company}</h2>
              <p className='text-sm text-gray-600'>{startDate} – {endDate}</p>
              <p className='text-lg font-bold text-orange-500'>{exp.role}</p>
              <p className='text-sm italic mb-4'>{exp.outline}</p>

              {exp.achievements && (
                <p className='text-sm mb-3'><strong>Achievements:</strong> {exp.achievements}</p>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className='ml-4'>
                  <p className='text-sm font-bold mb-2'>Projects:</p>
                  <ul className='space-y-2'>
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className='text-sm'>
                        <span className='font-semibold'>{project.name}</span>
                        {'length' in project && project.length && <span className='text-gray-600'> ({project.length})</span>}
                        {project.url && (
                          <div className='text-orange-500'>
                            <Link href={project.url} target="_blank" className='underline text-xs'>
                              View →
                            </Link>
                          </div>
                        )}
                        {project.technologies_used && project.technologies_used.length > 0 && (
                          <p className='text-xs text-gray-600 mt-1'>
                            Tech: {project.technologies_used.join(', ')}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })
      }
    </Layout>
  );
}
