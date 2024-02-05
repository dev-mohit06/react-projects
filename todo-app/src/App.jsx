import { useState } from "react";
import Card from "./ui/Card";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div className="h-screen max-w-auto w-95% mx-auto bg-background flex justify-center items-center">
      <TaskProvider>
        <Card />
      </TaskProvider>
    </div>
  )
}

export default App
