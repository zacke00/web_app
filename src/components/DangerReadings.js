import React, { useEffect, useState } from 'react';

function DangerReadings() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/DANGER')
      .then(response => response.json())
      .then(data => setReadings(data));
  }, []);

  return (
    <div>
      <h1>DANGER</h1>
      {readings.map(reading => (
        <div key={reading.id}>
          <h3>Name: {reading.Name}</h3>
          <p>Temperature: {reading.Temperature}</p>
          <p>Humidity: {reading.Humidity}</p>
          <p>Light: {reading.Light}</p>
        </div>
      ))}
    </div>
  );
}

export default DangerReadings;