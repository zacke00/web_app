import React, { useEffect, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

const LiveData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const wsUrl = 'ws://localhost:3002';
    const socket = new ReconnectingWebSocket(wsUrl);

    socket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      setData(messageData);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Temperature: {data.temperature} C</p>
          <p>Humidity: {data.humidity} %</p>
          <p>Light: {data.light}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default LiveData;