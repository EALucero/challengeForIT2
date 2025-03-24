import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Task";
import TaskList from "../pages/Task/TaskList";
import TaskItem from "../pages/Task/TaskItem";

export default function AppRoutes() {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/tasks">
                <Route index element={<Tasks />} />
                <Route path="list" element={<TaskList />} />
                <Route path="edit/:id" element={<TaskItem />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

/* import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import 'bootstrap/dist/css/bootstrap.min.css'

<Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/read/:id' element={<Read />} />
            <Route path='/edit/:id' element={<Update />} />
        </Routes> */
