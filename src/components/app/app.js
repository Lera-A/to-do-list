import React, { useState, useCallback } from 'react';
import AddTasksForm from '../addTaskForm';
import Task from '../task';
import generateId from '../generateId';

export default function App() {
    const [tasks, setTasks] = useState([{
        text: '',
        id: generateId()
    }]);

    const addTask = useCallback((task) => {
        setTasks((tasks) => [...tasks, task]);
    }, []);

    const removeTask = useCallback((taskToRemove) => {
        setTasks((tasks) =>
            tasks.filter((task) => task.id !== taskToRemove));
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
                        <Task task={task} key={task.id} removeTask={removeTask} />
                    ))}
                </ul>
            </main>
        </div>
    );
};