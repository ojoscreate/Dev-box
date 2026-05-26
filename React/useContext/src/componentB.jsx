import ComponentC from './componentC';
import { UserContext } from './componentA';
import { useContext } from 'react';
function ComponentB(){

    const user = useContext(UserContext)
    return(
        <div className="container">
            <h1>Component B</h1>
            <h2>{`Hi ${user}`}</h2>
            <ComponentC />
        </div>
    )
}
export default ComponentB;