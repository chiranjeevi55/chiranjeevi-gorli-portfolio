import React from 'react'
import { projects } from '../../../data/projects'
import WorkCard from './WorkCard'


const WorksSection = () => {
  return (
    <div className='grid gap-6 mt-14 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) =>(
            <WorkCard key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default WorksSection
