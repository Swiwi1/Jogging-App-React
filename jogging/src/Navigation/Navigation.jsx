import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    const isSignedIn = false
    if (isSignedIn) {
        return (  
        <div>     
                <nav className='navbar_navigation'>
                    <Link className="navbar-home" to='/'>
                        <p>Home</p>
                    </Link>
                    <Link className="navbar-text" to='signout'>
                        <p>Sign out</p>
                    </Link>
                </nav>
            <Outlet/>
        </div> 
        )
        
    } else {
        return (
            <div>
                <nav className='navbar_navigation'>
                <Link className="navbar-home" to='/'>
                <p>Home</p>
                </Link>
                <Link className="navbar-text" to='signin'>
                <p>Sign in</p>
                </Link>
                <Link className="navbar-text" to='register'>
                <p>Register</p>
                </Link>
                </nav>
                <Outlet/>
            </div>
        )
    }
}

export default Navigation