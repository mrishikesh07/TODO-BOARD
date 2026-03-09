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

  console.log(allTask);
  return (
    <>
      <Input onAdd={addTask}/>
      <div>
        {
          allTask.map((task)=>
            <DisplayBoard key={task.id} task={task}/>
          )
        }
      </div>
    </>
  )
}

export default App
