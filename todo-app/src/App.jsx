import { useState } from "react";
import Card from "./ui/Card";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handelEvent = task => {
    setTasks([...tasks, task]);
  }

  const handelDelete = (key) => {
    tasks.pop(key);
    setTasks([...tasks]);
  }

  return (
    <div className="h-screen max-w-auto w-95% mx-auto bg-background flex justify-center items-center">
      <Card tasks={tasks} onTasksChange={handelEvent} onTasksDelete={handelDelete} />
    </div>
  )
}

export default App
