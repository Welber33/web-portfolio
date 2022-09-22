import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div 
      initial = {{ opacity: 0 }}
      whileInView = {{ opacity: 1 }}
      transition = {{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 mb-40 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/44277956?v=4"
        className="mt-[100px] -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]"
      />

      <div className="sm:mt-20 ml-20 space-y-10 px-0 md:px10">
        <h4 className="text-4xl font-semibold">
          Here is a {" "}
          <span className="underline decoration-[#8e03ce]/40">little</span>{" "}
          background
        </h4>

        <p className="text-base text-justify">
          I'm João Welber, recently graduated in computer science by Wyden Educacional Institute. I’m currently working on personal projects and acquiring some technical knowledgement on Figma, nextJs, tailwindCSS, more about react hooks and styled components, docker and kubernetes and microfrontends.
          I’m looking to collaborate on the community sharing knowledge, talking about frontend development. At the moment i am looking for help with getting a frontend developer job
          Feel free to ask me about React, Next, Styled Components,TailwindCSS, Typescript, HTML, CSS, Javascript, Vercel, Docker, Kubernetes, a little of Java Spring Boot, etc. and i will try to give you the best answer i can.
        </p>
      </div>
    </motion.div>
  )
}