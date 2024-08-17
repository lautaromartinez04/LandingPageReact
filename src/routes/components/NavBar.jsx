import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/navBar.css'
import logo from '../../assets/logo.png'
 
export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <Link className="navbar-brand" href="#">
                <img src={logo} alt=""/>
                (nombre empresa)
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/linux" className="nav-link">Linux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/ciberseguridad" className="nav-link">Ciberseguridad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/soluciones" className="nav-link">Soluciones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
