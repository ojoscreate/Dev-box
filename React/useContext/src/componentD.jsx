import { useContext } from "react";
import { UserContext } from "./componentA";


function ComponentD(){
    const user = useContext(UserContext)
    return(
        <div className="container">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}
export default ComponentD;