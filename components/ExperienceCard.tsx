import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Experience } from '../typings'

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 
    w-[300px] h-[650px] md:w-[400px] xl:w-[450px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto scrollbar-hide">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-16 h-26 rounded-full md:rounded-full sm:mt-4 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 text-center">
        <h3 className="font-bold text-3xl">{experience?.companyName}</h3>
        <h4 className="font-light text-2xl mt-1">{experience.jobTitle}</h4>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(technology => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="w-8 h-8 rounded-full"
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrenctyWorkingHere 
          ? "Present" 
          : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-none space-y-4 ml-5 text-lg h-80 overflow-y-scroll scrollbar-hide">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}