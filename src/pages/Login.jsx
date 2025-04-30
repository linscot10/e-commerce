import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'




const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
        navigate('/')
    }
    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
            </form>
        </div>
    )
}

export default Login