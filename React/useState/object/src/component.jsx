import { useState } from "react";


function Component() {
    const [car, setCar] = useState({year: 2025,
                                    make: "Nissan",
                                    model: "sport"});

    const handleYearChange=(e)=>{
        setCar(c =>({...car, year: e.target.value}));
    }
    const handleMakeChange=(e)=>{
        setCar(c =>({...c, make:e.target.value}))
    }
    const handleModelChange=(e)=>{
        setCar(c =>({...c, model: e.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" name="carYear" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" name="carMake" value={car.make} onChange={handleMakeChange}/> <br />
            <input type="text" name="carModel" value={car.model} onChange={handleModelChange} />
        </div>
    )
}
export default Component;