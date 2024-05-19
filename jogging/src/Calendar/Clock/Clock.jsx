import React, { useState, useEffect } from 'react';
import './Clock.css'

function Clock(props) {
  const [time, setTime] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState(0);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); 

  function tick() {
    setTime(new Date());
  }

  useEffect(() => {
    currentDate();
  }, []); 

  function currentDate() {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setCurrentDay(today.getDate());
    setCurrentDayOfWeek(today.getDay())
  }

  return (
    <div className='clock-component-container'>
      <div className='clock-container'>
        <p className='clock-time right-column'>{time.toLocaleTimeString()}</p>
        <div className='calendar-current-date right-column'>{props.days[currentDayOfWeek]} {currentDay} {props.months[currentMonth]} {currentYear}</div>
      </div>
    </div>
  );
}


export default Clock;
