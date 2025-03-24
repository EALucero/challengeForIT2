import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <p>En ésta página se crean tareas que nunca se realizaran...</p>
            <button className="mt-5" type="submit">
                <Link to={'/api/tasks'}>Comenzar</Link>
            </button>
        </>
    )
}