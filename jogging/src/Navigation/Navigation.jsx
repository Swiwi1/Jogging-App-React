import React from 'react'
import './Navigation.css'

const Navigation = () => {
    const isSignedIn = false
    if (isSignedIn) {
        return (        
        <nav className='navbar_navigation'>
            <p className="navbar-text">Sign out</p>
        </nav>
        )
    } else {
        return (
            <div>
                <nav className='navbar_navigation'>
                <p className="navbar-text">Sign in</p>
                <p className="navbar-text">Register</p>
                </nav>
            </div>
        )
    }
}

export default Navigation