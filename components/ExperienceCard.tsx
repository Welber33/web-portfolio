import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center spce-y-7 flex-shrink-0 
    w-[400px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxNNIEPscqH_8JO-iW0ahkikkpnTTrLpp7g&usqp=CAU"
        alt=""
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-end Developer Freelancer</h4>
        <p className="font-bold text-2xl mt-1">W-Front</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://inversify.io/img/ts.png"
            className="h-10 w-10 rounded-full sm:rounded-full"
            alt=""
          />
          <img
            src="https://inversify.io/img/ts.png"
            className="h-10 w-10 rounded-full sm:rounded-full"
            alt=""
          />
          <img
            src="https://inversify.io/img/ts.png"
            className="h-10 w-10 rounded-full sm:rounded-full"
            alt=""
          />
          {/** Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}