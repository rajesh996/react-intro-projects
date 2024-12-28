import React, { useState, createContext, useContext } from 'react'
const ContextWrapper = createContext();
let data = {
    msg: "Going to Goa for a week",
    sender: "Rajesh"
}

function Context() {
    console.log('Context is rendered');
    const [count, setCount] = useState(100);
    const handleCount = (newCount) => {
        setCount(newCount)
    }
    data = {...data, count, handleCount};

  return (
    <ContextWrapper.Provider value={data}>
        {/* <GrandParent count={count} handleCount={handleCount}></GrandParent> */}
        <GrandParent></GrandParent>
    </ContextWrapper.Provider>
  )
}

function GrandParent() {
    console.log('Grand parent is rendered');
    
    return (
        <>
            <h3>Grand Parent</h3>
            <div>down</div>
            {/* <Parent count={count} handleCount={handleCount}></Parent> */}
            <Parent></Parent>
        </>
    )
}

function Parent() {
    console.log('parent is rendered');
    return (
        <>
            <h3>Parent</h3>
            <div>down</div>
            {/* <Child count={count} handleCount={handleCount}></Child> */}
            <Child></Child>
        </>
    )
}

function Child() {
    console.log('Child is rendered');
    const {msg, count, handleCount} = useContext(ContextWrapper);
    return (
        <>
            <h3>Child</h3>
            <div>down</div>
            <button onClick={() => handleCount(count+1)}>+</button>
            <p>{count}</p>
            <p>{msg}</p>
            <p>Msg from ContextAPI - ContextWrapper</p>
            <button>-</button>
        </>
    )
}

export default Context