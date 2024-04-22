import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 flex overflow-hidden whitespace-nowrap">
        <h1 className="text-[15vw] leading-none font-bold uppercase pt-5 pb-5">we are crazy</h1>
        <h1 className="text-[15vw] leading-none font-bold uppercase pt-5 pb-5">we are crazy</h1>
      </div>
    </div>
  )
}

export default Marquee
