import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-auto flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scrollbar-hide"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="mt-40 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-hide">
        {projects?.map((project, i) => (
          <div 
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="w-[700px] h-[400px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-4xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#8e03ce]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map(technology => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                ))}
              </div>

              <p className="text-lg text-justify md:text-left">
                {project?.summary}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#7d7083]/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  )
}
export default Projects;