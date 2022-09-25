import Link from 'next/link';
import React from 'react'
import { Typewriter, Cursor } from "react-simple-typewriter/dist"
import BackgroundCircles from './BackgroundCircles';


function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative w-32 h-32 mx-auto rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/44277956?v=4"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front-end Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">
            <Typewriter
              words={["Hi, The Name's João Welber", "Guy-who-loves-coffee.tsx", "<ButLovesToCodeMore />"]}
              loop={true}
              delaySpeed={2000}
            />
          </span>
          <Cursor cursorColor="#8e03ce" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

        </div>
      </div>

    </div>
  )
}
export default Hero;