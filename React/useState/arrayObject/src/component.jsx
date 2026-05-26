import { useState } from "react";


function Component() {
    const [car, setCar] =  useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState();
    const [carMake, setCarMake] = useState();

    // HANDLERS--------

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCar(c=>[...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
       setCar( c => c.filter((_, i) => i !== index))
    } 

     function handleCarYear(e) {
        setCarYear(e.target.value)
    }

    function handleCarMake(e) {
        setCarMake(e.target.value)
    }

    function handleCarModels(e) {
        setCarModel(e.target.value)
    }



    return(
        <div className="container">
            <h2>List of car</h2>
            <ul>
                {car.map((car, index) => 
                    <li key={index} onClick={() =>handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} placeholder="Enter Car year"  onChange={handleCarYear}      /><br />
            <input type="text" value={carMake} placeholder="Enter Car make"  onChange={handleCarMake}    /><br />
            <input type="text" value={carModel} placeholder="Enter Car model" onChange={handleCarModels} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
export default Component;
