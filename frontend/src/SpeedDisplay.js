// src/components/SpeedDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpeedDisplay = () => {
  const [speed, setSpeed] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/speedData'); // Replace with your API endpoint
        setSpeed(response.data.speed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <p>Speed: {speed}</p>;
};

export default SpeedDisplay;
