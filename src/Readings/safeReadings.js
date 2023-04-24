import React, { useEffect, useState } from 'react';


function SafeReadings() {
  const [readingsArr, setReadings] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => 
    fetch('http://localhost:3000/Reading')
      .then(response => response.json())
      .then(data => {
        const sortedReadings = data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
        setReadings(sortedReadings.slice(0, 5));
      }, 10000));
      return () => clearTimeout(timeoutId);
    }, [readingsArr]);


  const readings = readingsArr.map(reading => {
    let color = reading.Safety === "Warning" ? "#FFD300" : "#3CB371";

    return (
      <div className='Repeated--div' key={reading.id}>
        <h3>Name: {reading.name}</h3>
        <p>Temperature: {reading.Temperature}</p>
        <p>Humidity: {reading.Humidity}</p>
        <p>Light: {reading.Light}</p>
        <p style={{color: color}}>Status: {reading.Safety}</p>
        <p>Time: {reading.DateTime.slice(0,10)} {reading.DateTime.slice(11,16)}</p>
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