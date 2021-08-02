import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom bg-light shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Studio Gōrudo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mejor Vendidos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Bandai</a></li>
                                <li><a className="dropdown-item" href="#">Modo*</a></li>
                                <li><a className="dropdown-item" href="#">Kotobukiya</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Bandai</a></li>
                                <li><a className="dropdown-item" href="#">Modo*</a></li>
                                <li><a className="dropdown-item" href="#">Kotobukiya</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto">
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Buscar</button>  
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
