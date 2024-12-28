import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';

function Header() {
    const {currentTheme, handleTheme} = useContext(ThemeWrapper);
    return (
        <>
            <button onClick={handleTheme}>Toggle Theme</button>
            <div>Header</div>
            <div>Down</div>
            <Options></Options>
            <Options></Options>
            <Options></Options>
        </>
    )
}

function Options() {
    const {currentTheme} = useContext(ThemeWrapper);
    return (
        <div className={currentTheme}>HELLO</div>
    )
}

export default Header