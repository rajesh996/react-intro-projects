import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function ReduxComponent() {
    // const [count, setCount] = useState(0);

    const {count} = useSelector((store) => store.counterState)

    const handleIncrement = () => {
        console.log("Increment will happen");
    }

    const handleDecrement = () => {
        console.log("Decrement will happen");
    }

    return (
        <>
            <div>
                Redux Component
            </div>
            <div style={{ "display": "flex", "gap": "1rem"}}>
                <button onClick={handleIncrement}>+</button>
                <p>Count: {count}</p>
                <button onClick={handleDecrement}>-</button>
            </div>
        </>
    )
}

export default ReduxComponent