import React, { useState } from 'react'
import BaseInput from './BaseInput'
import PrimaryRoundedButton from '../buttons/PrimaryRoundedButton'
import { FaPlus } from 'react-icons/fa'

const CreateTaskInput = ({ placeholder, onCreateTask }) => {

  const [newTask, setTask] = useState('');

  const handelChange = (e) => {
    setTask(e.target.value);
  }

  const handelClick = (e) => {
    if (newTask === "") return;

    onCreateTask({
      task: newTask,
      completed: false,
    });

    setTask('');
  }

  return (
    <div className='flex justify-between items-center p-2 w-auto border-2 border-l-0 border-t-0 border-r-0 border-b-secondary gap-1'>
      <BaseInput className={"placeholder:text-sm"} placeholder={placeholder} onChange={handelChange} value={newTask} />
      <PrimaryRoundedButton className={"h-5 w-5 p-[.3rem]"} Icon={FaPlus} onClick={handelClick} />
    </div>
  )
}

export default CreateTaskInput
