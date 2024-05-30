import './App.css'
import { Routes, Route} from 'react-router-dom'
import RainAnimation from './Rain/RainAnimation.jsx'
import Navigation from './Navigation/Navigation.jsx'
import Homepage from './HomePage/Homepage.jsx'
import Calendar from './Calendar/Calendar.jsx'
import NewWorkoutPage from './NewWorkout/NewWorkoutPage/NewWorkoutPage.jsx'
import ExerciseList from './NewWorkout/ExerciseList/ExerciseList.jsx'
import CreateWorkout from './NewWorkout/CreateWorkout/CreateWorkout.jsx'


function App() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div>
    <RainAnimation/>
    <Routes >
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Homepage/>}/>
          <Route path='calendar' element={<Calendar days={days} months={months}/>}/>
          <Route path='new-workout' element={<NewWorkoutPage/>}/>
          <Route path='new-workout/exercise-list' element={<ExerciseList/>}/>
          <Route path='new-workout/create-workout' element={<CreateWorkout/>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default App
