import React, { useContext, useEffect, useRef } from 'react'
import { motion, m, useScroll, useTransform, Variants } from 'framer-motion'
import { Context } from '../../../../Provider/Provider'
import "./aboutMe-style.css"
const AboutMe = () => {
    const megaCardref = useRef(null)
    const targetRef = useRef(null)
    const aboutPageRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)
    const cursorOutlineRef = useRef<HTMLDivElement>(null)
    const { theme } = useContext(Context)
    const cardVariants: Variants = {
        hidden: {
            opacity: [0, 1],
            x: [100, 0]
        }
    }
    const { scrollYProgress, scrollY } = useScroll({ target: targetRef, offset: ["start end", "end start"], })
    const y = useTransform(scrollYProgress, [0, 1], [250, -250])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    useEffect(() => {
        aboutPageRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
            const posX = e.clientX
            const posY = e.clientY
            if (cursorDotRef.current && cursorOutlineRef.current) {
                cursorDotRef.current.style.left = `${posX}px`
                cursorDotRef.current.style.top = `${posY}px`
                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`,
                }, {
                    duration: 600,
                    fill: "forwards",
                })

            }
        })
    }, [])
    return (
        <div ref={aboutPageRef}>
            <div className='custom-cursor '>
                <div ref={cursorDotRef} className="cursor-dot size-3 bg-neutral-700"></div>
                <div ref={cursorOutlineRef} className="cursor-out border border-zinc-950 dark:border-white size-9"></div>
            </div>
            <motion.div ref={megaCardref} className='z-[1] cursor-none min-h-[100vh] container mx-auto  dark:text-white py-12 text-black h-full relative'>
                <div className='absolute top-1/4 -z-[1] left-0 -translate-x-4 '>
                    <h1 className={`${theme === "dark" ? "text-outline" : "text-outline-light"} text-nowrap text-[11rem] w-full font-extrabold`}>ABOUT.</h1>
                </div>
                <motion.header whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }}
                    className='dark:text-white text-3xl font-extrabold after:absolute after:h-2 inline-block after:-bottom-3 after:left-0 after:w-1/3 after:bg-black dark:after:bg-white relative after:content-[""] '>About me</motion.header>
                <div className='grid space-x-5  grid-cols-2 mt-8'>
                    <div className='flex flex-col self-center gap-y-5'>
                        <motion.h3 whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }} className='text-2xl text-yellow-300'>Stable and Reliable</motion.h3>
                        <motion.h2 whileInView={{ scale: 1, opacity: 1 }} animate={{ scale: 0.7, opacity: 0.7 }} transition={{ type: "spring" }} className='text-7xl font-bold'>Reach out to me on every platform</motion.h2>
                        <motion.p whileInView={{ y: 0, opacity: 1 }} animate={{ y: -50, opacity: 0 }} transition={{ type: "spring" }} className=' font-extralight font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste sint nihil explicabo, quasi deserunt, suscipit excepturi similique incidunt id saepe nostrum? Autem ratione aperiam vero architecto, unde quae natus facere dolorem repudiandae soluta.</motion.p>
                        <button className='flex items-center  hover:gap-x-3 gap-x-1 hover:bg-yellow-500 ease-in-out duration-150 hover:shadow-lg mt-3 px-4 py-3 text-lg bg-yellow-500 btn cursor-pointer self-start'>
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1em] text-xl">
                                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <motion.div
                        ref={targetRef}
                        // variants={cardVariants} whileInView={"hidden"}
                        // transition={{ type: "spring", stiffness: 50 }}
                        // viewport={{ root: megaCardref, once: false }}
                        // style={{ opacity: opacity, transform: `translate(0px, ${translateZ}px)`}}
                        style={{ y, opacity }}
                        data-aos={y.get()}
                        className='mega-card relative rounded-3xl text-white overflow-hidden'>
                        <div className='mega-card-image '>
                        </div>
                        <motion.div whileInView={{ x: [-100, 0] }} transition={{ type: "spring", stiffness: 50 }} className='mega-card-mini-text ease-in-out bottom-1/3 left-2  w-2/3 gap-y-5 flex-col absolute'>
                            <span className='text-yellow-300 text-lg font-semibold'>Lorem</span>
                            <span className='text-5xl font-bold'>Lorem ipsum dolor.</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet dolorem eaque?</span>
                            <div className="flex  items-center mb-5">
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
                    </motion.div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus dolore minima exercitationem ratione sunt laudantium in laboriosam sed tempore ab libero quo rerum aut, inventore accusantium, eaque odio. Deleniti, neque ab! In, aspernatur excepturi! Impedit adipisci minima quod? Possimus officia tenetur expedita quasi blanditiis ad culpa nam id quae rerum in velit error, eos excepturi. Ipsum magnam quos odit officia recusandae tempore ipsa ipsam, doloribus eius. Sapiente, excepturi praesentium? Rerum nam libero tempora voluptates distinctio cum, cumque, nobis sapiente molestias itaque sit! Quos id accusantium nihil et, quis sed. Recusandae sint eaque sapiente dolore necessitatibus expedita explicabo modi rerum nobis? Fuga maiores perspiciatis reiciendis libero temporibus, consectetur eligendi possimus laborum adipisci architecto officiis id recusandae atque unde laboriosam pariatur voluptatem. Mollitia repellendus, tempora omnis ipsam veritatis velit odio expedita porro fugit magnam. Eius, eaque! Rem ratione aliquam incidunt ducimus ab accusamus quas dolorum quisquam nam! Perferendis doloribus at nam ad minus dignissimos voluptatibus culpa voluptates officia! Neque fugit molestias, provident quas dicta id repellat modi repudiandae hic minus rem eveniet cum numquam velit doloremque dolorem necessitatibus repellendus corporis dolorum quisquam dolore magni quaerat odit! Corrupti, eveniet nobis. Ipsa voluptas dolor placeat! Ab fugit eaque ex! Nihil dolores cupiditate deserunt, quis odio atque quae laborum repellat voluptates magni reiciendis dignissimos, labore ullam, consectetur nesciunt incidunt sunt? Harum perferendis incidunt, voluptates modi excepturi sit aut eius unde, asperiores nostrum rerum beatae ipsam maiores veritatis ipsa accusamus hic. Accusamus dolorem id temporibus iste officiis expedita odit minima sapiente reiciendis, voluptatibus qui eos iusto deserunt quasi maiores. Doloribus explicabo obcaecati illum quis fugit dolorum veritatis voluptates saepe numquam deserunt consectetur quidem animi asperiores illo quibusdam ducimus aut perspiciatis rerum soluta, vel totam? Sunt consequatur officia quam nobis saepe harum officiis, architecto porro, consequuntur unde temporibus ratione labore quia laborum assumenda ad eligendi molestias. Vero voluptatibus recusandae vel iure laudantium maxime exercitationem accusamus beatae eos tempore maiores ut corporis velit quisquam expedita, odit cum eveniet itaque corrupti! Quas inventore consequuntur aliquam possimus, distinctio eos aperiam? Repellendus, sequi aliquid. Similique quibusdam eos ad, cumque minima aliquid quae quo error odio id hic quasi praesentium ex sint repudiandae sit fugit, autem modi iure sunt fugiat recusandae vel? Necessitatibus voluptas, quidem voluptatum atque cupiditate aspernatur accusantium repellat, veniam odit qui similique eveniet dolores? Omnis maiores quaerat officia fuga, dolores temporibus ab officiis. Nihil maiores provident sapiente aperiam nam quisquam vel molestiae accusantium, commodi consectetur iure deleniti exercitationem optio est cum amet dolor dolorem deserunt nulla laboriosam praesentium facilis iusto temporibus! Veritatis quo laboriosam optio, iste quos error quaerat eligendi doloremque, natus qui minus corrupti consectetur minima quia magnam. Perspiciatis dicta pariatur neque sit, quae quos temporibus consectetur consequuntur optio odio nostrum magni nihil saepe quis atque nobis obcaecati accusantium possimus culpa quod iste! Nesciunt id, eveniet, minus tempore voluptatum alias nam incidunt labore eius quidem expedita odit culpa earum? Laudantium totam eos, officia asperiores, fugit itaque architecto ipsam consequuntur voluptas repudiandae sint praesentium, quibusdam eius dignissimos distinctio omnis voluptates quis odio quidem. Et deserunt magnam dolor soluta obcaecati omnis debitis velit deleniti veniam sed culpa voluptatem corporis nesciunt blanditiis ipsam cum ut, quae aliquam recusandae? Harum suscipit vel maxime quae eaque id natus soluta provident veritatis repellendus nulla molestias, eveniet magni. Repudiandae adipisci nobis laboriosam ducimus facilis recusandae, illo vel magni quasi iusto animi ipsa amet voluptate voluptatibus rerum expedita, quod non modi nulla repellat quo magnam! Doloremque quisquam quasi necessitatibus odit et facilis culpa nihil consectetur placeat nulla, dolores recusandae impedit! Error rem sequi ex, placeat magni quis in cumque perspiciatis, deserunt, dignissimos dolore dolores perferendis. Nisi quas laborum necessitatibus eligendi mollitia, voluptate rerum repellendus id libero magnam distinctio officia omnis animi accusamus quibusdam qui perferendis, blanditiis eius exercitationem est autem? Voluptatem, molestiae esse? Quae repellat laborum asperiores praesentium ipsum odio error ipsam, facere cumque, harum repudiandae, autem accusantium corporis. Officia, deserunt ad voluptatum quae est magni hic iure, laborum mollitia cupiditate at odit delectus nisi perspiciatis enim? Incidunt soluta numquam perspiciatis, doloribus, est accusamus porro atque nostrum excepturi, doloremque sapiente saepe error ullam voluptate eum molestias hic sequi exercitationem autem sed iste.
                </div>
            </motion.div>
        </div>
    )
}
export default AboutMe
