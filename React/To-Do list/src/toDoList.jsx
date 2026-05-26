import { useState } from "react"
function toDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    function addTask(){
       if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
      function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        if(index > 0){  
                
            const updatedTasks = [...tasks];

            // formula for moving things up  [[index], [index-1]]=[ [index - 1], [index]]
            [updatedTasks[index], updatedTasks[index - 1]] =  [ updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
      function moveTaskDown(index){
         if(index < (tasks.length - 1)){  
                
            const updatedTasks = [...tasks];

            // formula for moving things down [[index ]], [index + 1]=[ [index + 1], [index]]
            [updatedTasks[index ], updatedTasks[index + 1]] =  [ updatedTasks[index + 1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="toDoList-container">
           <h1>To Do List</h1>
           <div>
                <input type="text" placeholder="Enter a Task..."  value={newTask} onChange={handleInputChange}/>
                <button className="add-btn" onClick={addTask}>Add</button>
           </div>
           <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                   
                     <button className="move-btn" onClick={() => moveTaskUp(index)}>
                        ⬆
                    </button>
                      <button className="move-btn" onClick={() => moveTaskDown(index)}>
                         ⬇
                    </button> 
                    <button className="delete-btn" onClick={() => deleteTask(index)}>
                        ✕
                    </button>
                </li>
            )}
           </ol>

        </div>
    )
}
export default toDoList