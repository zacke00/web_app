import React, { useEffect, useState } from 'react';

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
      <div className='container' style={{ background: color }} key={reading.id}>
        <h3>Name: {reading.Name}</h3>
        <p>Temperature: {reading.Temperature}</p>
        <p>Humidity: {reading.Humidity}</p>
        <p>Light: {reading.Light}</p>
        <p>Status: {reading.Safety}</p>
      </div>
    );
  });

  return <div>{readings}</div>;
}

export default SafeReadings;