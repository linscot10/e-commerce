import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {

    const { logout, user } = useUser()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    if (!user) return null
    return (
        <button onClick={handleLogout} className="btn btn-outline-danger btn-sm ms-2  mt-1">
            Logout
        </button>
    )
}

export default LogOut