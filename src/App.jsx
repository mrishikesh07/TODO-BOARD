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
    <div className="px-12">
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1 className="text-xl font-semibold">TO DO BOARD</h1>
      <Input onAdd={addTask}/>
    </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {
          allTask.map((task)=>
            <DisplayBoard key={task.id} task={task} onDelete={() => deleteTask(task.id)}/>
          )
        }
      </div>
    </div>
  )
}

export default App
