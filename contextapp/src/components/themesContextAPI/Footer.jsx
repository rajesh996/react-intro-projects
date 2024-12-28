import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';

function Footer() {
    const {currentTheme, handleTheme} = useContext(ThemeWrapper);
    return (
        <>
            <button onClick={handleTheme}>Toggle Theme</button>
            <div>Footer</div>
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
        <div className={currentTheme}>You only live once</div>
    )
}

export default Footer