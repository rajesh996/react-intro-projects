import React, { createContext, useState } from 'react'
import Header from './Header'
import Articles from './Articles'
import Footer from './Footer'
import "./themeManager.css"

export const ThemeWrapper = createContext();

function ThemeManager() {
    const [currentTheme, setCurrentTheme] = useState('light');
    const handleTheme = () => {
        const newTheme = currentTheme == 'light' ? 'dark' : 'light';

        setCurrentTheme(newTheme);
    }

    return (
        <ThemeWrapper.Provider value={{currentTheme, handleTheme}}>
            <button onClick={handleTheme}>Toggle Theme</button>
            <Header />
            <Articles />
            <Footer />
        </ThemeWrapper.Provider>
    )
}

export default ThemeManager