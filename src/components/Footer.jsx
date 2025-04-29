import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <div className="container text-center">
                <small>&copy; {new Date().getFullYear()} KIbandaski. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer