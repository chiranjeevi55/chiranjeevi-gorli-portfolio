import React from 'react'
import Hero from './Hero'
import SkillsPage from '../../skills/SkillsPage'

const HomeContent = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <SkillsPage />
    </div>
  )
}

export default HomeContent
