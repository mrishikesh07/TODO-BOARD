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
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1 className="text-xl font-semibold">TO DO BOARD</h1>
      <Input onAdd={addTask}/>
    </div>
      <div className="grid grid-cols-3">
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
