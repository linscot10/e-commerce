import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

import { useUser } from '../context/UserContext';

import LogOut from './LogOut';



const Navbar = () => {
    const { user } = useUser()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0">

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
                        <li className="nav-item">
                            <Link className="nav-link " to='/checkout'>< IoBagCheckOutline /> Check Out</Link>
                        </li>


                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {!user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"><FaUser />Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Hi, {user.name}</span>
                                </li>
                                <li className="nav-item">
                                <LogOut />
                                   
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar