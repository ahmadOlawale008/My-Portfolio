import React, { SetStateAction, createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
type ContextType = {
    theme: "dark" | "light"
    setTheme?: React.Dispatch<SetStateAction<"dark" | "light">>
}


let pageMode: "dark" | "light" = typeof localStorage.getItem("theme") === "string" ? localStorage.getItem("theme") as "dark" | "light" : "dark"

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    pageMode = "dark";
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
} else {
    pageMode = "light"
    localStorage.theme = "light"
    document.documentElement.classList.remove('dark')
}

export const Context = createContext<ContextType>({ theme: pageMode })
const Provider = () => {
    const [theme, setTheme] = useState(pageMode)
    return (
        <Context.Provider value={{ theme, setTheme }}>
            <Outlet />
        </Context.Provider>
    )
}

export default Provider
