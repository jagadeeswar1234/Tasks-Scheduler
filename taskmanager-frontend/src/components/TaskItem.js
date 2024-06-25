import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
