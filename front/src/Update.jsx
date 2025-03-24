import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8081/read/${id}`)
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
    axios.put(`http://localhost:8081/update/${id}`, values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err));
  }  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
          <div className='mb-2'>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Enter title' className='form-control' value={values.title}
              onChange={e => setValues({ ...values, title: e.target.value })} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder='Enter description' className='form-control' value={values.description}
              onChange={e => setValues({ ...values, description: e.target.value })} />
          </div>
          <div className='mb-2'>
          <label htmlFor=""></label>
          <button onClick={handleClick} className={'btn btn-sm ' + (state > 0 ? 'btn-success' : 'btn-danger')}>{state > 0 ? 'Completed' : 'Pending'}</button>
        </div>
          <Link to="/" className='btn btn-primary me-2'>Back</Link>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update