import { useState, useEffect } from 'react';
import Chart, { register } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import './sideInfo.css';


function SideInfo() {
  const [weather, setWeather] = useState(null);
  const [chart, setChart] = useState(null);
  const api_key= "d9d2d1126808f8b155f1df0f297e54a6";
  const location = "Oslo";
  
  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api_key}&units=metric&cnt=40`;
        fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (weather) {
      const filteredWeatherData = weather.list.filter((data, index) => index % 8 === 0);
      const temperatureData = filteredWeatherData.map(data => ({ x: new Date(data.dt * 1000), y: data.main.temp }));
      const humidityData = filteredWeatherData.map(data => ({ x: new Date(data.dt * 1000), y: data.main.humidity }));
  
      if (chart) {
        chart.destroy();
      }
  
      const ctx = document.getElementById('myChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Temperature',
              data: temperatureData,
              borderColor: 'red',
              fill: false
            },
            {
              label: 'Humidity',
              data: humidityData,
              borderColor: 'blue',
              fill: false
            }
          ]
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              x: {
                type: 'category',
                labels: temperatureData.map(data =>
                  new Date(data.x).toLocaleDateString('en-US', { weekday: 'long' })
                ),
                time: {
                  unit: 'day',
                  tooltipFormat: 'MM-dd',
                  displayFormats: {
                    day: 'eee',
                  },
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                  color: 'white',
                },
              },
              y: {
                ticks: {
                  beginAtZero: true,
                  color: 'white',
                },
              },
            },
          },
      }); 
  
      setChart(newChart);
    }
  }, [weather]);
  return (
    <div className="side-info">
      <div className="side-info-header">
        <h1>Side Information</h1>
      </div>
      <div className="side-info-body">
        {weather ? (
          <div className='myChart-weather'>
            <h2>{weather.city.name}</h2>
            <canvas  id="myChart"></canvas>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}

export default SideInfo;