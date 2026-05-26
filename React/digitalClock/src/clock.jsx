
import { useEffect, useState } from "react";


function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return() =>{
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hour = time.getHours();
        let mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridian = hour >= 12? "PM": "Am";

        // to convert from millitary time 

         hour = hour % 12 || 12;

        return(`${addZero(hour)}:${addZero(mins)}:${addZero(secs)} ${meridian}`);

    }
    function addZero(number) {
        return((number < 10? "0" : "") + number)
    }

    return(
        <div className="clock-container">
            <div className="clock"><span>{formatTime()}</span></div>
        </div>
    )
}
export default Clock;