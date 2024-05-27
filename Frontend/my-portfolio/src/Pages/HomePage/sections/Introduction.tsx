import React, { useContext } from 'react'
import Navbar from '../../../Components/Navbar'
import { motion } from "framer-motion"
import { Context } from '../../../Provider/Provider'
import "./aboutMe-style.css"
const Introduction = () => {
    const { theme } = useContext(Context)
    return (
        <div className='pt-7 pb-9 container mx-auto dark:text-white z-[1] min-h-[100vh] h-full relative'>
            <div>
                <Navbar />
                <div className='absolute top-1/3 -z-[1] left-0 -translate-x-96 '>
                    <h1 className={`${theme === "dark" ? "text-header-banner" : "text-header-banner-light"} text-nowrap text-[13rem] w-full font-extrabold`}>Ahmad Kassim.</h1>
                </div>
                <div className=' flex z-10 flex-col gap-y-8'>
                    <div className='flex mt-20 items-center gap-x-14 justify-between'>
                        <div className='flex flex-col   gap-y-4 w-full md:w-1/2'>
                            <motion.h3 whileInView={{ y: [-100, 0], opacity: [0.3, 1] }} transition={{ type: "spring" }} className='text-6xl leading-snug font-semibold'><b className='text-7xl text-grad'>Hello!</b> I am Kassim Ahmad</motion.h3>
                            <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ type: "spring", stiffness: 40 }} className='text-wrap mt-3 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos quo deserunt, nam, nisi hic ipsum odit corrupti iste dolorem, sunt maxime laudantium!</motion.p>
                            <motion.small className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.
                            </motion.small>
                            <div className='grid grid-cols-2 items-end w-fit text-sm   font-bold gap-x-5'>
                                <span className='bg-yellow-500 px-3 py-2 rounded-lg text-slate-800'># Machine Learning Engineer</span>
                                <span className='pl-3 border-[1px] divide-x-0 divide-slate-200 px-3 py-2 rounded-lg dark:border-white border-black'># Full Stack Website Developer</span>
                            </div>
                        </div>
                        <div className='self-end relative'>
                            <div className='size-72 relative image-user rounded-full  bg-slate-800'></div>
                            <div className="">
                                <span className='absolute bottom-0 -left-1 drop-shadow-react-icon z-10'>
                                    <img src={process.env.PUBLIC_URL + "assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg"} className='size-14 my-animate-spin duration-[5s] drop-shadow-lg shadow-sky-500' alt="react icon" />
                                </span>
                                
                                <span className='absolute top-0 -right-1 dark:drop-shadow-django-icon drop-shadow-django-icon-light z-10'>
                                    <img src={process.env.PUBLIC_URL + "assets/icons/django-svgrepo-com.svg"} className='size-14  duration-[5s] drop-shadow-lg shadow-sky-500' alt="django icon" />
                                </span>
                                <span className='absolute bottom-0 -right-1  z-10'>
                                    <img src={process.env.PUBLIC_URL + "assets/icons/mysql-logo-svgrepo-com.svg"} className='size-16  duration-[5s] drop-shadow-lg shadow-sky-500' alt="django icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mini-cards grid mt-2 grid-cols-3 gap-x-20 divide-x-[1px] divide-slate-600 divide-solid">
                            <div className="mini-card  gap-y-2  flex flex-col items-center">
                                <span className='text-8xl font-bold text-black/85 dark:text-sky-100/90 text-center'>3</span>

                                <span className='inline-flex items-center gap-x-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-8' viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                                    Github commits</span>
                            </div>
                            <div className="mini-card  gap-y-2 flex flex-col items-center">
                                <span className='text-8xl font-bold text-black/85 dark:text-sky-100/90 text-center'>12</span>
                                <span className='inline-flex items-center gap-x-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='size-8' fill='currentColor' width="32px" height="32px"><path d="M 10.351562 4 C 10.117563 4 10 4.1165625 10 4.3515625 L 10 27.644531 C 10 27.878531 10.116563 27.996094 10.351562 27.996094 L 12.648438 27.996094 C 12.882437 27.996094 13.001953 27.879531 13.001953 27.644531 L 13.001953 22.808594 L 14.810547 21.085938 L 20.048828 27.75 C 20.190828 27.915 20.354922 28 20.544922 28 L 23.716797 28 C 23.882797 28 23.977 27.952422 24 27.857422 L 23.933594 27.498047 L 17.023438 18.910156 L 23.650391 12.498047 C 23.773391 12.370047 23.730438 12 23.398438 12 L 20.117188 12 C 19.951187 12 19.785141 12.085953 19.619141 12.251953 L 13 18.974609 L 13 4.3515625 C 13 4.1165625 12.883437 4 12.648438 4 L 10.351562 4 z" /></svg>Kaggle compentitions</span>
                            </div>
                            <div className="mini-card gap-y-2  flex flex-col items-center">
                                <span className='text-8xl font-bold text-black/85 dark:text-sky-100/90 text-center'>1</span>
                                <span className='inline-flex items-center gap-x-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                    </svg>
                                    Live Projects</span>
                            </div>
                        </div>
                    </div>
                    <motion.button className='inline-flex gap-x-2 mt-3 hover:shadow-md bg-yellow-500 btn cursor-pointer self-start'>
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default Introduction
