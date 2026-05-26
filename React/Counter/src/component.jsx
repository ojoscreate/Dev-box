import React, {useState} from "react";
function Component() {
    let [name, SetName] = useState("Guest");
    let [age, setAge] = useState(0);
    const [isemployed, setIsemployed] = useState(false)
    const updateName = () =>{
        SetName("Job")
    }
    const incrementAge = ()=>{
        setAge(age + 1)
    }
    const toggleStatus = () =>{
        setIsemployed(!isemployed)
    }
    return(
        <> 
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Age Increment</button>
            <p>Employed: {isemployed? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Change Status</button>
        </>
    )
}
export default Component;