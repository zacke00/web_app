import React, { useEffect, useState } from 'react';
import '../style/css/SafeReadings.css';

function SafeReadings() {
  const [readingsArr, setReadings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Reading')
      .then(response => response.json())
      .then(data => setReadings(data));
  }, []);

  const readings = readingsArr.map(reading => {
    let color = reading.Safety === "Warning" ? "#FFD300" : "#3CB371";

    return (
      <div className='Repeated-Safe-div'  style={{ background: color }} key={reading.id}>
        <h3>Name: {reading.name}</h3>
        <p>Temperature: {reading.Temperature}</p>
        <p>Humidity: {reading.Humidity}</p>
        <p>Light: {reading.Light}</p>
        <p>Status: {reading.Safety}</p>
      </div>
    );
  });

  return (
  <div className='container'>
    <div>
      <h1>Safe Readings</h1>
      {readings}
    </div>
  </div>
  
  );
}

export default SafeReadings;