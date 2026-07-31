import { useEffect, useState} from 'react'

const STORAGE_KEY = 'tema'

function getInitialTheme(){
    const saved = localStorage.getItem(STORAGE_KEY)
    if(saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light'}

export function useTheme(){
    const [theme, setTheme] = useState(getInitialTheme)
    
    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    function toggleTheme (){
        const next = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem(STORAGE_KEY, next)
        setTheme(next)
    }

    return{theme, toggleTheme}
}