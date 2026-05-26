import { useState, useEffect, useRef } from "react";


function Component() {
    // let [number, setNumber] = useState(0);
    const inpRef1 = useRef(null);
    const inpRef2 = useRef(null);
    const inpRef3 = useRef(null);

    useEffect(() => {
        console.log("component Rendered");
        // console.log(inpRef1, inpRef2, inpRef3);
        
        // return () => {
            
        // };
    });
    const handleClick1 = () =>{
        // setNumber(n => n +1)
        inpRef1.current.focus();
        inpRef1.current.style.backgroundColor = "rgba(189, 77, 77, 0.65)";
        inpRef2.current.style.backgroundColor = "";
        inpRef3.current.style.backgroundColor = "";
        console.log(inpRef1.current.value);
        
    }
    const handleClick2 = () =>{
        // setNumber(n => n +1)
        inpRef2.current.focus();
        inpRef1.current.style.backgroundColor = "";
        inpRef2.current.style.backgroundColor = "rgba(189, 77, 77, 0.65)";
        inpRef3.current.style.backgroundColor = "";
        console.log(inpRef2.current.value);
        
    }  
    const handleClick3 = () =>{
        // setNumber(n => n +1)
        inpRef3.current.focus();
        inpRef3.current.style.backgroundColor = "rgba(189, 77, 77, 0.65)";
        inpRef1.current.style.backgroundColor = "";
        inpRef2.current.style.backgroundColor = "";
        console.log(inpRef3.current.value);
        
    }
    return(
        <div>
            <button onClick={handleClick1}>Click Here</button>
            <input type="text" ref={inpRef1} /> <br />
            <button onClick={handleClick2}>Click Here</button>
            <input type="text" ref={inpRef2} /><br />
            <button onClick={handleClick3}>Click Here</button>
            <input type="text" ref={inpRef3} />
        </div>
    )
}
export default Component;