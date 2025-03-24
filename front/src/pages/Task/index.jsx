import { Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TaskForm from "../../components/TaskForm";
import axios from 'axios';
import TasksList from "./TaskList";

export default function Taks() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        axios.get('http://localhost:8081/api/tasks')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2>Task List</h2>
            <div className="container-card text-black">
                <div className="row">
                    {data ? <TasksList /> : <p className=" text-center text-gray-600 uppercase  p-5">No hay tareas!</p>}
                </div>
            </div>

            <Nav className="flex justify-evenly">
                <button className="mt-5" onClick={toggleVisibility}>
                    {visible ? "Ocultar" : "Agregar"}
                </button>
            </Nav>
            {visible &&
                <div>
                    <TaskForm />
                </div>
            }
        </>
    );
};