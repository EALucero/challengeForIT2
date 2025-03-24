import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Task";
import TaskEdit from "../pages/Task/TaskEdit";
import TaskItem from "../pages/Task/TaskItem";
/* import 'bootstrap/dist/css/bootstrap.min.css' */

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/tasks" element={<Tasks />} />
            <Route path="/api/tasks/:id" element={<TaskItem />} />
            <Route path="/api/tasks/edit/:id" element={<TaskEdit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}