import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <div className="container text-center my-5 p-5 bg-light rounded shadow">
                <h1 className="display-1">404</h1>
                <h2 className="mb-4">Pagina non trovata</h2>
                <p className="lead">La pagina che stai cercando non esiste. Torna alla <Link to="/" >home page</Link>.</p>
            </div>
        </>
    )
}