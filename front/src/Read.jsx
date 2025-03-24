import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {
    const { id } = useParams();
    const [task, setTask] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res)
                setTask(res.data[0])
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <div className='p-2'>
                    <h2>Task Detail</h2>
                    <h3>ID: {task.id}</h3>
                    <h3>Title: {task.title}</h3>
                    <h3>Description: {task.description}</h3>
                    <h3>Completed: {task.completed > 0? 'yes' : 'no'}</h3>
                    <h3>Created at: {task.createdAt?.split('T')[0]}</h3>
                </div>
                <Link to="/" className='btn btn-primary me-2'>Back</Link>
                <Link to={`/edit/${task.id}`} className='btn btn-info'>Edit</Link>
            </div>
        </div>
    )
}

export default Read