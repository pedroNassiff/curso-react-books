import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <li className="nav-item"><Link to="/">Inicio</Link></li>
                <li className="nav-item"><Link to="/favoritos">Favoritos</Link></li>
                <li className="nav-item"><Link to="/login">Ingresar</Link></li>
                <li className="nav-item"><Link to="/registrarse">Registrarse</Link></li>
            </nav>
        </>
    )
}

export default Navbar;