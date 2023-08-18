
import { useState,useEffect } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode,setMode] = useState("")

  useEffect(() => {
    
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
        if(userPref){
            let check = userPref === "dark" ? "light" : "dark";
            setMode(check)
            if(check == 'dark'){
                console.log('userPref' , userPref)
                document.documentElement.classList.add('dark')
            }else{
                console.log('userPref' , userPref)
                document.documentElement.classList.remove('dark')
            }

        }else{
            let check = mediaQuery.matches ? "dark" : "light";

            if(check == 'dark'){
                console.log('normal' , check)
                document.documentElement.classList.add('dark')
            }else{
                console.log('normal' , check)
                document.documentElement.classList.remove('dark')
            }
        }
    }

    handleChange();
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)

  }, [])

  useEffect(() => {
    if(mode === 'dark'){
        console.log('dark' , mode)
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add('dark')
    }else{
        console.log('light' , mode)
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove('dark')

    }
  }, [mode])
  
  return  [mode,setMode]
  
}

export default useThemeSwitcher
