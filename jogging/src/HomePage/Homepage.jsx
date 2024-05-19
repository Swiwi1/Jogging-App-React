import React from "react"
import { Outlet, Link} from 'react-router-dom'

function Homepage() {
    return (
        <div>
            <Outlet/>

            <h1>Home Page</h1>
            <button>Profile</button>
            <Link className="homepage-option" to='calendar'>
            <button>Calendar</button>
            </Link>
            <button>New Workout</button>
        </div>
    )
}

export default Homepage