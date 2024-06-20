import React, { useContext, useEffect, useState } from 'react'
import Introduction from './sections/Introduction/Introduction'
import AboutMe from './sections/AboutMe/AboutMe'
import { Context } from '../../Provider/Provider'
import { useScroll, motion } from 'framer-motion'
import BottomNav from '../../Components/BottomNav/bottom-nav'
const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)
  const { scrollYProgress } = useScroll()
  const scrollFunction = () => {
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction)
    return (() => window.removeEventListener("scroll", scrollFunction))
  },)
  return (
    <motion.div className={`dark:bg-primary w-full  bg-slate-50 pb-9`}>
      <motion.div style={{ scaleX: scrollYProgress }} className="progress bg-yellow-300 h-[2px]  fixed top-0 right-0 origin-left left-0 z-[1000]"></motion.div>
      <div className=' mx-auto'>
        <div>
          <BottomNav />
        </div>
        <div className='dark:bg-primary w-full bg-slate-100'>
          <Introduction />
        </div>
        <div className='dark:bg-[#282d35] w-full bg-slate-100'>
          <AboutMe />
        </div>

      </div>
      <div onClick={() => {
        window.scrollTo(0, 0);
        setScrollPosition(0)
      }} className={`scroll-to ${scrollPosition > 10 ? "fixed" : "hidden"} none z-[100] bg-slate-600/30 cursor-pointer dark:bg-slate-500/40 backdrop-blur-md rounded-full p-3 bottom-10 right-16`}>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><rect fill="none" height="24" width="24" /><path d="M5.71,9.7L5.71,9.7c0.39,0.39,1.02,0.39,1.41,0L11,5.83V21c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5.83l3.88,3.88 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L12.7,2.7c-0.39-0.39-1.02-0.39-1.41,0L5.71,8.29 C5.32,8.68,5.32,9.32,5.71,9.7z" /></svg>
      </div>
    </motion.div>
  )
}

export default HomePage
