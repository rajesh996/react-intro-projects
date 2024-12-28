import React, { useRef, useState } from 'react'

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    }

    const formatTime = (time) => {
        let hr = parseInt(time/3600);
        time = time % 3600;
        let min = parseInt(time/60);
        let sec = time%60;

        hr = hr <= 9 ? `0${hr}` : hr;
        min = min <= 9 ? `0${min}` : min;
        sec = sec <= 9 ? `0${sec}` : sec;

        return `${hr}:${min}:${sec}`;
    }

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    }

    const handleReset = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
        setTime(0);
    }

  return (
    <div>
        <h1>Stopwatch</h1>
        <h2>{formatTime(time)}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch