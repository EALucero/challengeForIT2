import TaskCard from "../../components/TaskCard";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function TasksList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2>Tasks</h2>
            {data.length ? (
                data.map((task, index) => (
                    <TaskCard key={index} task={task} />
                ))
            ) : (
                <p className=" text-center text-gray-600 uppercase  p-5">
                    No hay tareas!
                </p>
            )}
        </>
    );
};