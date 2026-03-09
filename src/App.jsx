import { useState } from "react"
import Input from "./components/Input"
import DisplayBoard from "./components/DisplayBoard";


function App() {
  const [allTask, setAllTasks] = useState([]);

  const addTask = (task) =>{
    const newTask = {
      id: Date.now(),
      text: task
    }
    setAllTasks(prev => [...prev, newTask]);
  }

  const deleteTask = (id) =>{
    setAllTasks(prev => prev.filter(task => task.id !== id));
  }
  console.log(allTask);
  return (
    <>
      <Input onAdd={addTask}/>
      <div>
        {
          allTask.map((task)=>
            <DisplayBoard key={task.id} task={task} onDelete={() => deleteTask(task.id)}/>
          )
        }
      </div>
    </>
  )
}

export default App
