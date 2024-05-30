
import { Outlet, Link } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import './ExerciseList.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const ExerciseList = () => {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${inputValue}`,
      params: { limit: '500' },
      headers: {
        'X-RapidAPI-Key': '8328b1eb44msh5fd05c54c816843p1d0223jsn550e15555494',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResult(response.data);
      console.log(response)
        
      setError(null);
    } catch (error) {
      setResult(null);
      setError('An error occurred while fetching data.');
    }
  };


  return (
    <div>
        <Outlet/>
        <Link className='go-back-icon' to='/new-workout'>
            <p><FontAwesomeIcon icon={faArrowLeft} /></p>
          </Link>
        <div>
          <div className='exercise-page-container'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter exercise name"
            className='exercise-input'
          />
        </form>
      </div> 
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
      {result && (
        <div>         
          <div className='exercise-container'>
            {result.map((exercise) => (
                <div key={exercise.id} className='exercise-card'>
                <div className='exercise-muscle-group'>
                  <p className='exercise-body-part'>{exercise.bodyPart}</p><p className='exercise-body-part-second'>{exercise.secondaryMuscles[0]}</p>
                </div>
                  <div className='img-container'>
                  <img className='img-div' src={exercise.gifUrl}></img>
                </div>
                <p className='exercise-name'>{exercise.name.toUpperCase()}</p>
                <p className='exercise-instructions'>{exercise.instructions}</p>
                </div>
            ))}
          </div>
        </div> 
      )}
    </div>
    </div>
    
  )
}

export default ExerciseList
