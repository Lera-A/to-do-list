import React, { useState, useCallback } from 'react';
import AddTasksForm from '../addTaskForm';
import Task from '../task';


export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback((task) => {
        setTasks((tasks) => [task, ...tasks]);
    }, []);



    return (
        <div>
            <header>
                <h1>To-Do List</h1>
            </header>
            <main>
                <AddTasksForm addTask={addTask} />
                <ul>
                    {tasks.map((task, i) => (
                        <Task task={task} key={'task_' + i} />
                    ))}
                </ul>

            </main>
        </div>
    )

}