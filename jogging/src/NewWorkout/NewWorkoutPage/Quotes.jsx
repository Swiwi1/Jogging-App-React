import React from 'react';
import quotes from './data';
import { useState, useEffect } from 'react';
import './Quotes.css';

const QuoteGenerator = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex(() => Math.floor(Math.random() * quotes.length));
        }, 4000);

        return () => clearInterval(interval);
    }, [quotes.length]);

    return (
        <div className="quote-table">
            <h1 className='quote-text'>{quotes[currentQuoteIndex]}</h1>
        </div>
    );
};

export default QuoteGenerator;
