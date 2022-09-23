import Link from 'next/link'
import React from 'react'

type Props = {}

export default function HomeButton({}: Props) {
  return (
    <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="mt-20 flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/44277956?v=4"
              alt=""
              className="w-8 h-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
  )
}