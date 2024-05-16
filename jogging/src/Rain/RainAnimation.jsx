
// RainAnimation.js
import React, { useEffect } from 'react';
import './RainAnimation.css'; // Import CSS file for rain animation styling

const RainAnimation = () => {
  useEffect(() => {
    makeItRain();
  }, []);

  const makeItRain = () => {
    const rainContainer = document.querySelector('.rain-container');
    rainContainer.innerHTML = ''; // Clear previous raindrops

    let increment = 0;
    let drops = "";
    let splats = ""; // Initialize splats string

    while (increment < 100) {
      const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      increment += randoFiver;

      // Create raindrop elements with splat effect
      drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>`;
      
      // Add splat elements with same position as raindrops
      splats += `<div class="splat" style="left: ${increment}%; bottom: ${randoFiver + randoFiver + 1 + 100}%;animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>`;
    }

    rainContainer.innerHTML = drops + splats; // Add raindrops and splats to the rain container

    // Trigger the splat animation by adding the 'active' class after a delay
    setTimeout(() => {
      const splatElements = document.querySelectorAll('.splat');
      splatElements.forEach((splat) => {
        splat.classList.add('active');
      });
    }, 100); // Adjust the delay as needed
  };

  return (
    <div className="rain-container" />
  );
};

export default RainAnimation;
