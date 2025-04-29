import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const useUser = useContext(UserContext)

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        const fakeUser = { id: 1, name: 'John Doe', email }
        setUser(fakeUser)
    }

    const register = (name, email, password) => {
        // Mock register
        const fakeUser = { id: 2, name, email }
        setUser(fakeUser)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    )
}