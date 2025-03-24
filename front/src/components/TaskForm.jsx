import React, { useState } from 'react'
import axios from 'axios'
import { Col } from "react-bootstrap";

export default function TaskForm() {
  const [values, setValues] = useState({
    title: '',
    description: '',
    completed: 0,
    createdAt: new Date()
  })

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8081/api/tasks', values)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} className='mt-16'>
      <h2 className='mb-5'>Add Task</h2>
      <Col md={6} className='mb-2 lg:flex justify-between'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Enter title' className='form-control text-black'
          onChange={e => setValues({ ...values, title: e.target.value })} />
      </Col>
      <Col md={6} className='mb-2 lg:flex justify-between '>
        <label htmlFor="">Description</label>
        <input type="text" placeholder='Enter description' className='form-control text-black'
          onChange={e => setValues({ ...values, description: e.target.value })} />
      </Col>
      <button className='btn btn-success'>Submit</button>
    </form>
  )
}