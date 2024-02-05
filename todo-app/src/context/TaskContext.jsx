import { useReducer } from "react";
import { createContext } from "react";

const TaskContext = createContext({
    tasks: [],
    createTask: (newTask) => { },
    removeTask: (position) => { },
    updateTaskStatus: (position) => { },
});



const taskReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.newTask];

        case "remove":
            return state.filter((_, index) => index !== action.position);

        case "update":
            return state.map((task, index) => {
                if (index === action.params.position) {
                    console.log(action.params.status);
                    return { ...task, completed: action.params.status };
                }
                return task;
            });

        default:
            break;
    }
}

const TaskProvider = ({ children }) => {
    const [tasksState, dispatch] = useReducer(taskReducer, []);

    const taskContext = {
        tasks: tasksState,
        createTask: (newTask) => dispatch({ type: "add", newTask: newTask }),
        removeTask: (position) => dispatch({ type: "remove", position: position }),
        updateTaskStatus: (position, status) => dispatch({
            type: "update", params: {
                position: position,
                status: status,
            }
        }),
    };

    return (<TaskContext.Provider value={taskContext}>
        {children}
    </TaskContext.Provider>);
}

export { TaskProvider };

export default TaskContext;