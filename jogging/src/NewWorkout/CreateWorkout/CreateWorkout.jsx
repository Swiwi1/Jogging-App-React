import React from 'react'
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const CreateWorkout = () => {
  return (
    <div>
    <Outlet/>
    <div>Create Workout</div>
</div>
  )
}

export default CreateWorkout