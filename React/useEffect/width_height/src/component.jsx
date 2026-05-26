import { useEffect, useState } from "react";

function Component(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize", handleResizewindow)
        console.log("resize");

        return() =>{
            window.removeEventListener("resize", handleResizewindow);
            console.log("resize Remove");
            
        }
        
    }, [])

    useEffect(()=>{
        document.title =  ` Size: ${width} x ${height}`
    }, [height,width])

    function handleResizewindow (){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div className="container">
            <p>Windows Width: {width}</p>
            <p>Windows Height: {height}</p>
        </div>
    )
}
export default Component;