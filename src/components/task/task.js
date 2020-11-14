import React, { useCallback, useState } from 'react';


export default function Task({ task, removeTask }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = useCallback(({ target: { checked } }) => {
        setIsChecked(checked);
    }, []);

    const handleDeleteClick = useCallback(() => {
        removeTask(task.id);
    }, [removeTask, task.id]);

    return (
        <div>
            {task.text && <li style={isChecked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                {task.text}
                {isChecked && <button onClick={handleDeleteClick}>х</button>}
            </li>}
        </div>
    );
};



