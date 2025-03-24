import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TaskItem() {
    const { id } = useParams();
    const [task, setTask] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/api/tasks/${id}`)
            .then(res => {
                console.log(res)
                setTask(res.data[0])
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = id => {
        axios.delete(`http://localhost:8081/api/tasks/delete/${id}`)
            .then(res => {
                /* setData(data.filter(task => task.id !== id)) */
                /* location.reload() */
                navigate('/api/tasks')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 rounded p-3'>
                <h2>Task Detail</h2>
                <div className='p-2'>
                    <h3>ID: {task.id}</h3>
                    <h3>Title: {task.title}</h3>
                    <h3>Description: {task.description}</h3>
                    <h3>Completed: {task.completed > 0 ? 'yes' : 'no'}</h3>
                    <h3>Created at: {task.createdAt?.split('T')[0]}</h3>
                </div>
                <Link to="/api/tasks" className='bg-blue-600 rounded px-2'>Back</Link>
                <Link to={`/api/tasks/edit/${task.id}`} className='bg-green-600 rounded px-2 mx-2'>Edit</Link>
                <button onClick={() => handleDelete(task.id)} className='bg-red-600 rounded p-0'>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem