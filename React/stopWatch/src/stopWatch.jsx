import { useState, useEffect, useRef } from "react";


function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
           intervalIdRef.current = setInterval(() => {
                setElapedTime(Date.now() - StartTimeRef.current)
            }, 10);
        }
        
        return () => {
            clearInterval(intervalIdRef.current)
        };
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        StartTimeRef.current = Date.now() - elapsedTime

    }
    function stop(){
        setIsRunning(false)
    }
    function reset(){
        setElapedTime(0)
        setIsRunning(false)
    }
    function formatTime(){
        let hour = Math.floor(elapsedTime /(1000 * 60 * 60));
        let min = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        let miliSecs = Math.floor(elapsedTime % 1000 /10)

        hour = String(hour).padStart(2, "0");
        min = String(min).padStart(2, "0");
        secs = String(secs).padStart(2, "0");
        miliSecs = String(miliSecs).padEnd(2, "0");

        return(
            `${hour}:${min}:${secs}:${miliSecs}`
        )
    }
  
    return(
        <div className="stopwatch">
           <div className="display">{formatTime()}</div>
           <div className="controls">
            <button className="start-btn" onClick={start} > Start</button>
            <button className="stop-btn" onClick={stop}>Stop</button>
            <button className="reset-btn" onClick={reset}>Reset</button>
           </div>
          
        </div>
    )
}
export default StopWatch;