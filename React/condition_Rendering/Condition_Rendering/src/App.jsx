import UserGreeting from "./UserGreetinng";
function App() {
  return(
    <>
    
    <h1>Component Rendering</h1>
    <UserGreeting isLoggedIn={false} username=""/>
    </>
  )
  
}
 export default App;