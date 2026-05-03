import React from 'react'
import { projects } from '../../../data/projects'
import WorkCard from './WorkCard'


const WorksSection = () => {
  return (
    <div className='flex flex-wrap gap-10 mt-14'>
        {projects.map((project) =>(
            <WorkCard key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default WorksSection
