import React, { useState } from 'react'
import AltButton from '../components/buttons/AltButton';
import { IoCloseSharp } from 'react-icons/io5';

const Task = ({ className, task, position, onDelete }) => {
  const [hasCompleted, setHasCompleted] = useState(task.completed);

  const handelClick = () => {
    setHasCompleted(prevState => !prevState);
  }

  const handelRemove = () => {
    onDelete(position);
  }

  const completedStyle = {
    color: hasCompleted ? "#b5b5b5" : "#3b3d3b",
    textDecoration: hasCompleted ? "line-through" : "",
  };

  const statusStyle = {
    backgroundColor: hasCompleted ? "#20bf55" : "#f44336",
  }

  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      <div className="flex justify-start items-center gap-5 w-full">
        <div className="p-[.35rem] rounded-full" style={statusStyle}></div>
        <p className={`text-base font-semibold text-primary hover:cursor-pointer`} onClick={handelClick} style={completedStyle}>{task.task}</p>
      </div>

      <AltButton Icon={IoCloseSharp} onClick={handelRemove} />
    </div>
  )
}

export default Task;