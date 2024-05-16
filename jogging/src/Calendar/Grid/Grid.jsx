import React from 'react';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        const currentDate = new Date();
        this.state = {
            currentYear: currentDate.getFullYear(),
            currentMonth: currentDate.getMonth()
        };
        this.handleClick = this.handleClick.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    handleClick(i) {
        console.log( `Day ${i} clicked`);
    }

    nextMonth() {
        this.setState(prevState => {
            let nextMonth = prevState.currentMonth + 1;
            let nextYear = prevState.currentYear;
            if (nextMonth > 11) {
                nextMonth = 0;
                nextYear++;
            }
            return {
                currentMonth: nextMonth,
                currentYear: nextYear
            };
        });
    }

    prevMonth() {
        this.setState(prevState => {
            let prevMonth = prevState.currentMonth - 1;
            let prevYear = prevState.currentYear;
            if (prevMonth < 0) {
                prevMonth = 11;
                prevYear--;
            }
            return {
                currentMonth: prevMonth,
                currentYear: prevYear
            };
        });
    }

    render() {
        const { days } = this.props;
        const { months } = this.props;
        const { currentYear, currentMonth } = this.state;
        const gridElements = [];
        let dayCounter = 1;
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        let emptyDays = firstDay === 0 ? 6 : firstDay;

        for (let i = 0; i < 42; i++) {
            if (i < emptyDays || dayCounter > lastDay) {
                gridElements.push(
                    <div key={i} className="grid">
                        <p className="day-text">{days[i % 7]}</p>
                        <p className="day-number"></p>
                    </div>
                );
            } else {
                gridElements.push(
                    <div key={i} className="grid" onClick={() => this.handleClick(i-firstDay+1,)}>
                        <p className="day-text">{days[i % 7]}</p>
                        <p className="day-number">{dayCounter}</p>
                    </div>
                );
                dayCounter++;
            }
        }

        return (
            <div className='component-container'>
                <div className='outer-container'>
                    <div className='button-container'>
                        <button onClick={this.prevMonth}>{'<'}</button>
                        <h1>{this.props.months[currentMonth]} {currentYear}</h1>
                        <button onClick={this.nextMonth}>{'>'}</button>
                    </div>
                </div>
                <div className='calendar-container'> 
                    <div className="grid-container">
                        {gridElements}
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;





