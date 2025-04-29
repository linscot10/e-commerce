import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'>Kibandaski</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link " to='/shop'>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to='/cart'><FaShoppingCart /> Cart</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to='/login'><FaUser /> Login</Link>

                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar