import React, { useEffect, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import './Livedata.css';
import GaugeChart from './Gauge/Livedatacharts';




const LiveData = ( { topic }) => {
  const [data, setData] = useState(null);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [name, setName] = useState(0);


  
  const changeTempeColor = () => {
    if (temperature >= 30 && temperature <= 33) {
      return "green";
    } else {
      return "#ff0000";
    }
  };
  const changeHumidColor = () => {
    if (humidity >= 48 && humidity <= 58) {
      return "green";
    } else {
      return "#ff0000";
    }
  };
  const changeLightColor = () => {

      return "yellow";
    
  };

  useEffect(() => {
    const wsUrl = 'ws://localhost:3002';
    const socket = new ReconnectingWebSocket(wsUrl);
  
  const subscribeToTopic = (topic) => {
    socket.send(JSON.stringify({ action: 'subscribe', topic }));
  };

  const unsubscribeFromTopic = (topic) => {
    socket.send(JSON.stringify({ action: 'unsubscribe', topic }));
  };

  // Subscribe to the provided topic
  subscribeToTopic(topic);

  socket.onmessage = (event) => {
    console.log('Received WebSocket message:', event.data);
    const messageData = JSON.parse(event.data);
    setData(messageData);
    setName(messageData.name)
    setTemperature(messageData.temperature);
    setHumidity(messageData.humidity);
    setLight(messageData.light);
  };

  return () => {
    // Unsubscribe from the topic before closing the socket
    unsubscribeFromTopic(topic);
    socket.close();
  };
}, [topic]);

  return (
    <div>
            <p>
              {name}
              </p>
      {data ? (
        <div className='div-dashboard'>
          <div className='Temperature-outer-div'>
            <div className='Temperature-inner-div'>
            <GaugeChart value={temperature} 
            min={0} 
            max={50} 
            label={`Temperature`} 
            color={changeTempeColor()}/>
              
            </div>
          </div>

          <div className='Humidity-outer-div'>
            <div className='Humidity-inner-div'>
            <GaugeChart 
            value={humidity}
             min={0} 
             max={100} 
             label="Humidity" 
             color={changeHumidColor()}/>
          
            </div>
          </div>
          <div className='Light-outer-div'>
            <div className='Light-inner-div'>
            <GaugeChart 
            value={light} 
            min={0} 
            max={300} 
            label="Light" 
            color={changeLightColor()}/>
          
          </div>
        </div>
          <div className='Info-outer-div'>
            <div className='Info-inner-div'>
              <p className='Temp-p'>Temperature safe reading: 29 - 33</p>
              <p className='Humid-p'>Humidity safe reading: 48 - 58</p>
          </div>
        </div>
          
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default LiveData;