import './App.css'
import { Routes, Route} from 'react-router-dom'
import RainAnimation from './Rain/RainAnimation.jsx'
import Navigation from './Navigation/Navigation.jsx'
import Clock from './Calendar/Clock/Clock.jsx'
import Grid from './Calendar/Grid/Grid.jsx'
import Homepage from './HomePage/Homepage.jsx'

function App() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div className='app'>
      <RainAnimation/>
      <Navigation/>
      <Homepage/>
      <div className='app-calendar-container'>
        <Clock months={months} days={days}/>
        <Grid months={months} days={days}/>
      </div>
    </div>
  )
}

export default App
