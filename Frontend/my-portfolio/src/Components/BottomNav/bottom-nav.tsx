import React from 'react'

const BottomNav = () => {
    return (
        <div className='fixed  bottom-11 z-[100000] left-1/2 -translate-x-1/2 shadow-md rounded-md dark:shadow-neutral-900 shadow-neutral-200'>
            <div className="menu inline-flex gap-x-1 dark:bg-zinc-600 bg-zinc-200 rounded-md overflow-auto">
                <div className='block m-auto'>
                    <a href='#introduction' className="menu-item menu-link leading-loose justify-center flex items-center hover:underline font-medium text-sm transition ease-in-out duration-150 cursor-pointer bg-white hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-900 dark:hover:text-white dark:bg-white p-2 rounded-md">
                        <span className='tracking-wider'>Introduction</span>
                    </a>
                </div>
                <div className='block m-auto'>
                    <a href='#about-me' className="menu-item menu-link leading-loose justify-center flex items-center hover:underline font-medium text-sm transition ease-in-out duration-150 cursor-pointer bg-white hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-900 dark:hover:text-white dark:bg-white p-2 rounded-md">
                        <span className='tracking-wider'>About Me</span>
                    </a>
                </div>
                <div className='block m-auto'>
                    <a className="menu-item menu-link leading-loose justify-center flex items-center hover:underline font-medium text-sm transition ease-in-out duration-150 cursor-pointer bg-white hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-900 dark:hover:text-white dark:bg-white p-2 rounded-md">
                        <span className='tracking-wider'>Projects</span>
                    </a>
                </div>
                <div className='block m-auto'>
                    <a className="menu-item menu-link leading-loose justify-center flex items-center hover:underline font-medium text-sm transition ease-in-out duration-150 cursor-pointer bg-white hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-900 dark:hover:text-white dark:bg-white p-2 rounded-md">
                        <span className='tracking-wider'>Contact</span>
                    </a>
                </div>
                <div className="menu-item cursor-pointer dark:bg-[#71fe6a] dark:text-black  dark:hover:bg-[#468b43] hover:bg-[#318737] bg-[#2baf34] text-white p-2 rounded-md">
                    <a href="#" className="menu-link leading-loose justify-center font-bold tracking-wide flex items-center  flex-nowrap gap-x-2 text-sm"><svg className='size-5' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 18L10.29 20.29C10.514 20.5156 10.7804 20.6946 11.0739 20.8168C11.3674 20.9389 11.6821 21.0018 12 21.0018C12.3179 21.0018 12.6326 20.9389 12.9261 20.8168C13.2196 20.6946 13.486 20.5156 13.71 20.29L16 18H18C19.0609 18 20.0783 17.5786 20.8284 16.8285C21.5786 16.0783 22 15.0609 22 14V7C22 5.93913 21.5786 4.92178 20.8284 4.17163C20.0783 3.42149 19.0609 3 18 3H6C4.93913 3 3.92172 3.42149 3.17157 4.17163C2.42142 4.92178 2 5.93913 2 7V14C2 15.0609 2.42142 16.0783 3.17157 16.8285C3.92172 17.5786 4.93913 18 6 18H8Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <g clip-path="url(#clip0_8_46)">
                            <path
                                d="M16 12C15.87 12.0016 15.7409 11.9778 15.62 11.93C15.4971 11.8781 15.3852 11.8035 15.29 11.7101C15.2001 11.6179 15.1287 11.5092 15.08 11.39C15.0296 11.266 15.0025 11.1338 15 11C15.0011 10.7376 15.1053 10.4863 15.29 10.3C15.3825 10.2033 15.4952 10.1282 15.62 10.0801C15.8031 10.0047 16.0044 9.98535 16.1984 10.0245C16.3924 10.0637 16.5705 10.1596 16.71 10.3C16.8947 10.4863 16.9989 10.7376 17 11C16.9975 11.1338 16.9704 11.266 16.92 11.39C16.8713 11.5092 16.7999 11.6179 16.71 11.7101C16.6166 11.8027 16.5057 11.876 16.3839 11.9258C16.2621 11.9755 16.1316 12.0007 16 12Z"
                                fill="currentColor" />
                            <path
                                d="M12 12C11.87 12.0016 11.7409 11.9778 11.62 11.93C11.4971 11.8781 11.3852 11.8035 11.29 11.7101C11.2001 11.6179 11.1287 11.5092 11.08 11.39C11.0296 11.266 11.0025 11.1338 11 11C11.0011 10.7376 11.1053 10.4863 11.29 10.3C11.3825 10.2033 11.4952 10.1282 11.62 10.0801C11.8031 10.0047 12.0044 9.98535 12.1984 10.0245C12.3924 10.0637 12.5705 10.1596 12.71 10.3C12.8947 10.4863 12.9989 10.7376 13 11C12.9975 11.1338 12.9704 11.266 12.92 11.39C12.8713 11.5092 12.7999 11.6179 12.71 11.7101C12.6166 11.8027 12.5057 11.876 12.3839 11.9258C12.2621 11.9755 12.1316 12.0007 12 12Z"
                                fill="currentColor" />
                            <path
                                d="M8 12C7.86999 12.0016 7.74091 11.9778 7.62 11.93C7.49713 11.8781 7.38519 11.8035 7.29001 11.7101C7.20006 11.6179 7.12873 11.5092 7.07999 11.39C7.0296 11.266 7.0025 11.1338 7 11C7.0011 10.7376 7.10526 10.4863 7.29001 10.3C7.3825 10.2033 7.49516 10.1282 7.62 10.0801C7.80305 10.0047 8.00435 9.98535 8.19839 10.0245C8.39244 10.0637 8.57048 10.1596 8.70999 10.3C8.89474 10.4863 8.9989 10.7376 9 11C8.9975 11.1338 8.9704 11.266 8.92001 11.39C8.87127 11.5092 8.79994 11.6179 8.70999 11.7101C8.61655 11.8027 8.50575 11.876 8.38391 11.9258C8.26207 11.9755 8.13161 12.0007 8 12Z"
                                fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_46">
                                <rect width="10" height="2" fill="white" transform="translate(7 10)" />
                            </clipPath>
                        </defs>
                    </svg>Message</a>
                </div>
            </div>
        </div>
    )
}

export default BottomNav
