import List from "./list"
function App() {
  
    // list of objects
    const fruits = [{id: 1, name:"apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories:105},
                    {id: 4, name: "watermelon", calories: 159},
                    {id: 5, name: "guava", calories: 80}];

    const veges = [{id: 6, name:"spinash", calories: 23},
                    {id: 7, name: "ewugu", calories: 76},
                    {id: 8, name: "cabage", calories:85},
                    {id: 9, name: "efo", calories: 59},
                    {id: 10, name: "brocoli", calories: 107}];






  return( <>
            {fruits.length > 0 ? <List items = {fruits} category = "Fruits"/> : null}
            {veges.length > 0 && <List items = {veges} category = "Vegetable"/>}

          </>);
}
export default App
