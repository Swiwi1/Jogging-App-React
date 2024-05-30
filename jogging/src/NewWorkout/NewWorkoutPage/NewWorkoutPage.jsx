import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './NewWorkoutPage.css'
import QuoteGenerator from './Quotes';


const NewWorkoutPage = () => {
  return (
    <div>
        <Outlet />
        <QuoteGenerator/>
        <Link className='go-back-icon' to='/'>
            <p><FontAwesomeIcon icon={faArrowLeft} /></p>
          </Link>
        <div className='new-workout-container'>
          <Link className='new-workout-option-text' to='exercise-list'>
              <p>Exercise List</p>
          </Link>
          <Link className='new-workout-option-text' to='create-workout'>
              <p>Create Workout</p>
          </Link>
          <Link className='new-workout-option-text' to='use-template'>
            <p>Use Template</p>
          </Link>
        </div>
    </div>
  )
}

export default NewWorkoutPage