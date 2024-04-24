import React from 'react'
import Navbar from './componenets/Navbar'
import LandingPage from './componenets/LandingPage'
import Marquee from './componenets/Marquee'
import About from './componenets/About'
import Eyes from './componenets/Eyes'
import Featured from './componenets/Featured'
import Cards from './componenets/Cards'
import Footer from './componenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
