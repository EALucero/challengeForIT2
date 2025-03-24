import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = id => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                /* setData(data.filter(task => task.id !== id)) */
                location.reload()
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Task List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className="btn btn-success">Create +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>CreatedAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((task, index) => {
                            return <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.completed > 0? 'yes' : 'no'}</td>
                                <td>{task.createdAt?.split('T')[0]}</td>
                                <td>
                                    <Link to={`/read/${task.id}`} className='btn btn-sm btn-info'>Read</Link>
                                    <Link to={`/edit/${task.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                    <button onClick={() => handleDelete(task.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home