import React from 'react'
import SecondaryRoundedButton from '../components/buttons/SecondaryRoundedButton'
import { FaCheck } from 'react-icons/fa'
import Task from './Task'
import CreateTaskInput from '../components/inputs/CreateTaskInput'

const Card = ({ tasks, onTasksChange, onTasksDelete }) => {

    const containerStyle = {
        overflowY: 'auto',
        scrollbarWidth: 'thin',
    };

    const loadTask = () => {
        if (tasks.length === 0) return <p className='text-primary text-base font-semibold'>No task yet.</p>
        else {
            return tasks.map((task, index) => (
                <Task key={(index + 1)} position={index} task={task} onDelete={onTasksDelete} />
            ));
        }
    }

    return (
        <div className='max-w-[460px] w-[90%] bg-white p-8 rounded-md border-2 border-border-color gap-7 flex flex-col justify-center'>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-start flex-col">
                    <h1 className='text-primary font-semibold text-xl'>Your Today's  Goals</h1>
                    <span className='text-secondary text-sm'>{new Date().toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <SecondaryRoundedButton className={"bg-background border-none"} Icon={FaCheck} />
            </div>

            <div className="tasks flex flex-col max-h-[234px] gap-5 overflow-y-auto" style={containerStyle}>
                {loadTask()}
            </div>

            <CreateTaskInput placeholder={"Enter a new task"} onCreateTask={onTasksChange} />
        </div>
    )
}

export default Card