import { useState } from "react";
import DarkTheme from "./DarkTheme";

export default function ThemeSwitch() {

    const [darkMode, setDarkMode] = useState(false);

    const text = darkMode ? 'light mode' : 'dark mode'

    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
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