import React, { useContext, useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { Context } from '../../Provider/Provider'
const AboutMe = () => {
    const ref = useRef(null)
    const { theme } = useContext(Context)
    const animateA = {
        hidden:{
            x: [-10, 10, 0]
        },
        visible:{

        },transition:{

        }
    }
    return (
        <div className='mt-4 z-[1] min-h-[100vh] container mx-auto dark:text-white py-12 text-black h-full relative'>
            <div className='absolute top-1/4 -z-[1] left-0 -translate-x-4 '>
                <h1 className={`${theme === "dark" ? "text-outline" : "text-outline-light"} text-nowrap text-[11rem] w-full font-extrabold`}>ABOUT.</h1>
            </div>
            <motion.header ref={ref} whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }} 
            className='dark:text-white text-3xl font-extrabold after:absolute after:h-2 inline-block after:-bottom-3 after:left-0 after:w-1/3 after:bg-black dark:after:bg-white relative after:content-[""] '>About me</motion.header>

            <div className='grid space-x-5  grid-cols-2 mt-8'>
                <div className='flex flex-col self-center gap-y-5'>
                    <motion.h3 whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }} className='text-2xl text-yellow-300'>Stable and Reliable</motion.h3>
                    <motion.h2 whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }} className='text-7xl font-bold'>Reach out to me on every platform</motion.h2>
                    <motion.p whileInView={{ y: 0, opacity: 1 }} animate={{ y: -50, opacity: 0 }} transition={{ type: "spring" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste sint nihil explicabo, quasi deserunt, suscipit excepturi similique incidunt id saepe nostrum? Autem ratione aperiam vero architecto, unde quae natus facere dolorem repudiandae soluta.</motion.p>
                    <button className='inline-flex gap-x-2 mt-3 px-4 py-3 text-lg hover:shadow-md bg-yellow-500 btn cursor-pointer self-start'>
                        Read more

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
                <div className='mega-card relative rounded-3xl text-white overflow-hidden'>
                    <div className='mega-card-image '>
                    </div>
                    <motion.div whileInView={{x:[-100, 0]}} transition={{type:"spring", stiffness:50}}  className='mega-card-mini-text ease-in-out bottom-1/3 left-2  w-2/3 gap-y-5 flex-col absolute'>
                        <span className='text-yellow-300 text-lg font-semibold'>Lorem</span>
                        <span className='text-5xl font-bold'>Lorem ipsum dolor.</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet dolorem eaque?</span>
                        <div className="flex items-center mb-5">
                            <svg className='size-6 ms-1 fill-[#f68b1e]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className='size-6 ms-1 fill-[#f68b1e]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className='size-6 ms-1 fill-[#f68b1e]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className='size-6 ms-1 fill-[#f68b1e]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className='size-6 ms-1 fill-[#f68b1e]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className='ml-2 text-lg'>5 stars</span>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
