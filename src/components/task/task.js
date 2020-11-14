import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

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

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    removeTask: PropTypes.func.isRequired
};

