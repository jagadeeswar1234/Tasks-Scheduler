import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/taskService';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await getAllTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleEdit = (task) => {
        setEditingTask(task);
    };

    const handleTaskSaved = () => {
        setEditingTask(null);
        fetchTasks();
    };

    return (
        <div>
            <h2>Task List</h2>
            <TaskForm task={editingTask} onTaskSaved={handleTaskSaved} />
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
