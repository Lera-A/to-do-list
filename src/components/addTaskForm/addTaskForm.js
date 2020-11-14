import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import generateId from '../generateId';

export default function AddTaskForm({ addTask }) {
    const [text, setText] = useState('');

    const handleTextChange = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const handleClick = useCallback(() => {
        if (text.length > 0) {
            const task = {
                text: text,
                id: generateId()
            };
            addTask(task);
            setText('');
        };
    }, [text, addTask]);

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            handleClick();
        };
    }, [handleClick]);

    return (
        <div>
            <input
                value={text}
                type="text"
                placeholder="What's your task?"
                onChange={handleTextChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

AddTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};