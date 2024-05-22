import './Carousel.css';
import React, { useState, useEffect } from "react";
import image1 from "../../assets/leg-press.img.jpg"
import image2 from "../../assets/running.img.jpg"
import image3 from "../../assets/yoga.img.jpg"
import image4 from "../../assets/boxing.img.jpg"


const Carousel = () => {
    const images = [
        image1,
        image2,
        image3,
        image4
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
    );
};

export default Carousel;
