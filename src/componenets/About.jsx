import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full p-20 bg-[#CBE767] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#bdd56c]">
        <div className="w-1/2">
            <h1 className="text-4xl">Our approach :</h1>
            <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Read More
               <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[60vh] overflow-hidden rounded-3xl bg-red-600">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
