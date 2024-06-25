import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ task, onTaskSaved }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [task]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description };

        if (task) {
            await updateTask(task.id, taskData);
        } else {
            await createTask(taskData);
        }
        onTaskSaved();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
