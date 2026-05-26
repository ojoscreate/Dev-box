import { useState } from "react"
function ColorPicker() {

    const [color, setColor] = useState("#fff")
    // FOR hsl,rgba USE OBJECT ------ uncomment to experience
    // const [color, setColor] = useState({hue: 0, saturation: 50, lightness: 50})

    const handleChangeColor =(e)=>{
        setColor(e.target.value)
    }

    return(
        <div className="colorPicker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color">Select a Color</label>
            <input type="color" name="color" value={color} onChange={handleChangeColor} style={{backgroundColor:color}}/>

        </div>
    )
}
export default ColorPicker