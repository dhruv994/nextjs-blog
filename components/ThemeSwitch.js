import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
    if(typeof localStorage === 'undefined'){
        return false;
    }
    const value = localStorage.getItem('darkMode');
    return (value === null) ? false : JSON.parse(value)
}
export default function ThemeSwitch() {


    const [darkMode, setDarkMode] = useState(loadDarkMode);

    const text = darkMode ? 'light mode' : 'dark mode'
    const handleClick = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
        setDarkMode(!darkMode);

    }

    return (
        <>
            <button onClick={() => handleClick()}>{text}</button>
            <style jsx>
                {`
            button{
              background:none;
              border:none;
              color:inherit;
              cursor:pointer
            }`}
            </style>
            {darkMode && <DarkTheme />}
        </>
    )
}