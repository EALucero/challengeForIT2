import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Col } from "react-bootstrap";

function TaskEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/tasks/${id}`)
      .then(res => {
        console.log(res)
        setValues({
          ...values,
          title: res.data[0].title,
          description: res.data[0].description,
          completed: res.data[0].completed,
          /* createdAt: res.data[0].createdAt */
        })
        setState(res.data[0].completed)
      })
      .catch(err => console.log(err));
  }, []);

  const [values, setValues] = useState({
    title: '',
    description: '',
    completed: '',
    /* createdAt: '' */
  })

  const handleClick = () => {
    setState(state > 0 ? 0 : 1);
    setValues({ ...values, completed: state > 0 ? 0 : 1 });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8081/api/tasks/edit/${id}`, values)
      .then(res => {
        console.log(res)
        navigate('/api/tasks')
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='mb-5'>Edit Task</h2>
      <Col md={6} className='mb-2 lg:flex justify-between'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Enter title' className='form-control text-black' value={values.title}
          onChange={e => setValues({ ...values, title: e.target.value })} />
      </Col>
      <Col md={6} className='mb-2 lg:flex justify-between'>
        <label htmlFor="">Description</label>
        <input type="text" placeholder='Enter description' className='form-control text-black' value={values.description}
          onChange={e => setValues({ ...values, description: e.target.value })} />
      </Col>
      <Col md={6} className='mb-2 lg:flex justify-between'>
        <label htmlFor="">Completed</label>
        <button onClick={handleClick} className={'btn-' + (state > 0 ? 'green-300' : 'red-300')}>{state > 0 ? 'Completed' : 'Pending'}</button>
      </Col>
      <Link to={`/api/tasks/${id}`} className='bg-blue-600 rounded px-2 me-2'>Back</Link>
      <button className='bg-green-600 rounded p-0'>Update</button>
    </form>
  )
}

export default TaskEdit