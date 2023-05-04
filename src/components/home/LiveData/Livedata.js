import React, { useEffect, useState } from "react";
import mqtt from "mqtt";

const Livedata = (Name) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect("mqtt://127.0.0.1:1883");

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe("my/test/topic");
    });

    // Receive messages
    client.on("message", (topic, message) => {
      const parsedMessage = JSON.parse(message.toString());
      setData(parsedMessage);
    });

    // Clean up on unmount
    return () => {
      if (client) {
        client.end();
      }
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Temperature: {data.temperature} °C</p>
          <p>Humidity: {data.humidity} %</p>
          <p>Light: {data.light}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Livedata;