import { useEffect, useState } from "react"

function Component() {
    const [count, setcount] = useState(0)
    const [color, setColor] = useState("red")
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`
        return() => {
            //  ADDING SOME CLEAN UP CODES 
        }
    },[count,color]);
    function addCount() {
        setcount(c=> c + 1)
    }
    function minusCount() {
        if (count !== 0) {
            setcount(c => c -1 )
        }
    }
    function changeColor() {
        setColor(c => c === "red" ? "green":"red")
    }
    return(
        <div className="container">
            <p style={ {color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={minusCount}>Substract</button><br />
            <button onClick={changeColor}> Change Color</button>

        </div>
    )
}
export default Component