import { useState, createContext } from 'react';
import ComponentB from '././componentB';
export const UserContext = createContext();
function ComponentA(){
    const [user, setUser] = useState("Job");
    return(
        <div className="container">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user = {user} />
            </UserContext.Provider>
            
        </div>
    )
}
export default ComponentA;