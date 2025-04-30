import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'



const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register } = useUser()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        register(name, email, password)
        navigate('/')
    }
    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h3>Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" className="form-control my-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
            </form>
        </div>
    )
}

export default Register