import Student from "./student"
function App() {
  return(
    <>
      <h1 className="heading">Welcome To React Props</h1>
      <Student name= "Andrew" age = {10} isStudent = {true} isPresent = {false} />
      <Student name = "Goodness" age = {10} isStudent = {false} isPresent = {false} />
      <Student name = {"danial"} age = {10} isStudent = {true} isPresent = {true} />
      <Student name = "Debra" age = {15} isPresent = {true} isStudent = {true} />
      <Student name = "guy"/>
      <Student/>
     </>
     
  )
}
export default App;