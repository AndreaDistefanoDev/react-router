import logo from '../assets/img/ChatGPT Image 16 mag 2026, 11_42_05.png'
import { NavLink } from 'react-router-dom'

export default function AppHeader() {


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src={logo} alt="Logo" width="100" height="50" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/products">Prodotti</NavLink>
                        <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    </div>
                </div>
            </nav>


        </header>

    )
}