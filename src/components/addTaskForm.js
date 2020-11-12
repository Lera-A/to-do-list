import React, { useState } from 'react';

export default function AddTaskForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        if (text.length > 0) {
            const task = {
                text: text
            };
            props.addTask(task);
            setText('');
        }
    }


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