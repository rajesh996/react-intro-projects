import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';

function Articles() {
    const {currentTheme} = useContext(ThemeWrapper);

    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem"}}>
            <div>Articles</div>
            <div>Down</div>
            <p className={currentTheme}>
                Lorem Ipsum dolar sit amet Lorem Ipsum dolar sit amet Lorem Ipsum dolar sit amet Lorem Ipsum dolar sit amet
            </p>
        </div>
    )
}

export default Articles;