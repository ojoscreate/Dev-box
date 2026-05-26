import { useState } from "react";


function Component() {
    const [sport, setSport] = useState(["Football", "basketball", "hockey",])
    function handleRemove(index) {
        setSport(sport.filter((_, i)=> i !== index))
    }
    function handleAdd() {
        const newSport = document.querySelector("#sportInput").value;
        document.querySelector("#sportInput").value = "";
        setSport(s =>[...s, newSport])
    }
    return(
        <div>
            <h2>List of Sports</h2>
            <ul>
                {sport.map((sport, index) => 
                    <li key={index} onClick={() =>{handleRemove(index)}}>
                        {sport}
                    </li>)}
            </ul>
            <input type="text" id="sportInput" placeholder="Enter sport name" />
            <button onClick={handleAdd}>Add Sport</button>
        </div>
    )
}
export default Component;