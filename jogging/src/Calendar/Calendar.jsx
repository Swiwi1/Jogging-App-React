import Grid from "./Grid/Grid";
import Clock from "./Clock/Clock";
import { useState } from 'react'
import { Outlet } from 'react-router-dom'




function Calendar({months, days}) {

    return (
        <div>
            <Outlet/>
            <div className='app-calendar-container'>
            <Clock months={months} days={days}/>
            <Grid months={months} days={days}/>
        </div>
      </div>
    )
}

export default Calendar