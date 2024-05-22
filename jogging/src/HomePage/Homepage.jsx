import React from "react"
import { Outlet, Link} from 'react-router-dom'
import Carousel from "./Carousel/Carousel"
import './Homepage.css'

function Homepage() {
    return (
        <div>
            <Outlet />
            <Carousel /> 
            <div className="homepage-options-container">
            <Link className="homepage-option" to="profile">
                <p>Profile</p>
                </Link>
                <Link className="homepage-option" to="calendar">
                <p>Calendar</p>
                </Link>
                <Link className="homepage-option" to="new-workout">
                <p>New Workout</p>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;