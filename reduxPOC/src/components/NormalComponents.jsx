import React, { useState } from 'react'

function NormalComponents() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }
  return (
    <>
        <div>Normal Component</div>
        <div style={{ "display": "flex", "gap": "1rem"}}>
            <button onClick={handleIncrement}>+</button>
            <p>Count: {count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>
    </>
  )
}

export default NormalComponents