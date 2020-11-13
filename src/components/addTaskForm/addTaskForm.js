import React, { useState, useCallback } from 'react';

export default function AddTaskForm({ addTask }) {
    const [text, setText] = useState('');

    const handleTextChange = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const handleClick = useCallback(() => {
        if (text.length > 0) {
            const task = text;
            addTask(task);
            setText('');
        };
    }, [addTask, text]);

    return (
        <div>
            <input
                value={text}
                type="text"
                placeholder="What's your task?"
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" onClick={handleClick} />
        </div>
    )
}