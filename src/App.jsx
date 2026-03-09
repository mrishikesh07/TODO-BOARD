import { useState } from "react"
import Input from "./components/Input"


function App() {
  const [allTask, setAllTasks] = useState([]);

  const addTask = (task) =>{
    setAllTasks(prev => [...prev, task]);
  }

  console.log(allTask);
  return (
    <>
      <Input onAdd={addTask}/>
    </>
  )
}

export default App
