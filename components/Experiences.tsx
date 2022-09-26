import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[]
}

function Experiences({ experiences }: Props) {
  return (
    <motion.div 
      initial = {{ opacity: 0 }}
      whileInView = {{ opacity: 1 }}
      transition = {{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>

      <div className="items-center mt-[190px] w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8e03c3]/80">
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}
export default Experiences;