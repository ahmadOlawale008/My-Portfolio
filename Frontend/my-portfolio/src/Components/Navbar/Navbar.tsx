import { useContext } from 'react'
import { Context } from '../../Provider/Provider'
import "./navbar-style.css"
const Navbar = () => {
    const { theme, setTheme } = useContext(Context)
    const handleTheme = () => {
        if (setTheme) {
            if (theme == "dark") {
                setTheme("light")
                localStorage.theme = "light"
                document.documentElement.classList.remove('dark')
            }
            else {
                setTheme("dark")
                localStorage.theme = "dark"
                document.documentElement.classList.add('dark')
            }
        }
    }
    return (
        <nav className='flex dark:text-white text-black flex-row items-center justify-between'>
            <div className='flex flex-row space-x-8 items-center'>
                <header className='text-base font-bold user-port-tracker tracking-wider'>Ahmad Portfolio</header>
                <ul className=' text-sm flex flex-row gap-x-5 items-center justify-center font-light'>
                    <li className='nav-link-tail ease-in-out '><a href='#' about='Home Page'>Home</a></li>
                    <li className='nav-link-tail ease-in-out'><a href='#'>About</a></li>
                    <li className='nav-link-tail ease-in-out'><a href='#'>Projects</a></li>
                </ul>
            </div>
            <div className='flex items-center text-[12px] font-light gap-x-5'>
                <a className='inline-flex cursor-pointer items-center gap-x-1'>
                    <svg width="800px" height="800px" viewBox="0 0 48 48" className="size-6" stroke='currentColor' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="cls-1" d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z" /></svg>
                    <span>Twitter</span>
                </a>
                <a className='inline-flex cursor-pointer items-center gap-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-6' viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                    <span>Github</span>
                </a>
                <a className='inline-flex cursor-pointer items-center gap-x-1'>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" className='size-6' xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="email"> <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="currentColor" /> </g> </g> </g>
                    </svg>
                    <span>Email</span>
                </a>
                <span className='cursor-pointer active:ring-2 active:ring-offset-2 active:ring-offset-slate-50 dark:active:ring-gray-800 dark:active:ring-offset-2 ring-gray-400 p-2 rounded-full active:dark:ring-offset-2 dark:active:ring-offset-slate-700/50' onClick={handleTheme}>
                    {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>}
                </span>
            </div>
        </nav>
    )
}
export default Navbar
