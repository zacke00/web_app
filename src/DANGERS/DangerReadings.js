import React, { useEffect, useState } from 'react';
import '../style/css/DangerReadings.css';

function DangerReadings() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/DANGER')
      .then(response => response.json())
      .then(data => setReadings(data));
  }, []);

  return (
    <div className="container" >
      <div>
        <h1>DANGER</h1>
        {readings.map(reading => (
          <div className='Repeated-Danger-div' style={{background: "#D21404"}} key={reading.id}>
            <h3>Name: {reading.Name}</h3>
            <p>Temperature: {reading.Temperature}</p>
            <p>Humidity: {reading.Humidity}</p>
            <p>Light: {reading.Light}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DangerReadings;