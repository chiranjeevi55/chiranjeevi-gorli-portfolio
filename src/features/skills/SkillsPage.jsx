import React from 'react'
import SkillsOverview from './components/SkillsOverview'

const SkillsPage = () => {
  return (
    <div>
        <div>
            <h1 className="mt-15 capitalize text-3xl md:text-4xl font-bold leading-none">
                my top skills
            </h1>
            <p className="capitalize mt-2 text-lg">what i do</p>
        </div>
        <SkillsOverview />
    </div>
  )
}

export default SkillsPage
