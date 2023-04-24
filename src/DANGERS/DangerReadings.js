import React, { useEffect, useState } from 'react';


function DangerReadings() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => 
    fetch('http://localhost:3000/DANGER')
      .then(response => response.json())
      .then(data => {
        const sortedReadings = data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
        setReadings(sortedReadings.slice(0, 5));
      }, 10000));
      return () => clearTimeout(timeoutId);
    }, [readings]);

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/DANGER/${id}`, { method: 'DELETE' })
      .then(() => {
        setReadings(prevReadings => prevReadings.filter(reading => reading._id !== id));
      })
      .catch(error => console.error(error));
  };
  
  return (
    <div className="container" >
      <div>
        <h1>DANGER</h1>
        {readings.map(reading => (
          <div className='Repeated--div' key={reading.id}>
            <h3 style={{color:"red"}}>Name: {reading.name}</h3>
            <p>Temperature: {reading.Temperature}</p>
            <p>Humidity: {reading.Humidity}</p>
            <p>Light: {reading.Light}</p>
            <p>Time: {reading.DateTime.slice(0,10)} {reading.DateTime.slice(11,16)}</p>
            <div className="container-button">
              <button className="button-remove" onClick={() => handleRemove(reading._id)}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DangerReadings;