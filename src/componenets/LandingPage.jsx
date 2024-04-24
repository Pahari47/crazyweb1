import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }} className="mr-5 mb-2 w-[8vw] rounded-md h-[4vw]">
                  <img className='overflow-hidden rounded-md' src="https://th.bing.com/th/id/OIP.O36CE3ngNvwPB8sPlaugtgHaFC?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </motion.div>)}
              <h1 className="uppercase text-[5vw] leading-none tracking-tighter font-bold">{item}</h1>
              </div>
            </div>
          )
        })}

      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p className="text-md font-light tracking-tight leading-none">{item}</p>))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
