import React, { useEffect, useState, useRef } from "react";
import "./Statistics.css";
import Footer from "../navigation/Footer/Footer";
import Chart from "chart.js/auto";
import DangerReadings from "./../home/DANGERS/DangerReadings";

function Statistics() {
  const canvasRefDanger = useRef(null);
  const canvasRefSafe = useRef(null);
  const chartRefDanger = useRef(null);
  const chartRefSafe = useRef(null);
  const [safeReadings, setSafeReadings] = useState([]);
  const [dangerReadings, setDangerReadings] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch('http://localhost:3000/DANGER')
        .then((response) => response.json())
        .then((data) => {
          const sortedReadings = data.sort(
            (a, b) => new Date(b.DateTime) - new Date(a.DateTime)
          );
          setDangerReadings(sortedReadings.slice(0, 5));
        });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dangerReadings]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch('http://localhost:3000/Reading')
        .then((response) => response.json())
        .then((data) => {
          const sortedReadings = data.sort(
            (a, b) => new Date(b.DateTime) - new Date(a.DateTime)
          );
          setSafeReadings(sortedReadings.slice(0, 5));
        });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [safeReadings]);

  useEffect(() => {
    if (dangerReadings.length === 0) return;

    const temperature = dangerReadings.map((reading) => reading.Temperature);
    const humidity = dangerReadings.map((reading) => reading.Humidity);
    const labels = dangerReadings.map((reading) => new Date(reading.DateTime).toLocaleString());

    if (!chartRefDanger.current) {
      
        
        const ctx = canvasRefDanger.current.getContext("2d");
        chartRefDanger.current = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                label: "Temperature",
            data: temperature,
            
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
        {
            label: "Humidity",
            data: humidity,
            
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },
    ],
},
options: {
    plugins: {
      title: {
        display: true,
        text: "Danger Readings",
        color: "#ffffff", // Change title color to white
      },
      legend: {
        labels: {
          color: "#ffffff", // Change dataset labels color to white
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // Change x-axis labels color to white
        },
        title: {
          display: true,
          text: "Time",
          color: "#ffffff", // Change x-axis title color to white
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          color: "#ffffff", // Change y-axis labels color to white
        },
        title: {
          display: true,
          text: "Value",
          color: "#ffffff", // Change y-axis title color to white
        },
      },
    },
  },

});
}else {
    chartRefDanger.current.data.labels = labels;
    chartRefDanger.current.data.datasets[0].data = temperature;
    chartRefDanger.current.data.datasets[1].data = humidity;
    chartRefDanger.current.update();
}
}, [dangerReadings]);

  useEffect(() => {
    if (safeReadings.length === 0) return;

    const temperature = safeReadings.map((reading) => reading.Temperature);
    const humidity = safeReadings.map((reading) => reading.Humidity);
    const labels = safeReadings.map((reading) => new Date(reading.DateTime).toLocaleString());

    if (!chartRefSafe.current) {
      
        
        const ctx = canvasRefSafe.current.getContext("2d");
        chartRefSafe.current = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                label: "Temperature",
            data: temperature,
            
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
        {
            label: "Humidity",
            data: humidity,
            
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },
    ],
},
options: {
    plugins: {
      title: {
        display: true,
        text: "Danger Readings",
        color: "#ffffff", // Change title color to white
      },
      legend: {
        labels: {
          color: "#ffffff", // Change dataset labels color to white
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // Change x-axis labels color to white
        },
        title: {
          display: true,
          text: "Time",
          color: "#ffffff", // Change x-axis title color to white
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          color: "#ffffff", // Change y-axis labels color to white
        },
        title: {
          display: true,
          text: "Value",
          color: "#ffffff", // Change y-axis title color to white
        },
      },
    },
  },

});
}else {
    chartRefSafe.current.data.labels = labels;
    chartRefSafe.current.data.datasets[0].data = temperature;
    chartRefSafe.current.data.datasets[1].data = humidity;
    chartRefSafe.current.update();
}
}, [safeReadings]);

  return (
    <div className="Statistics">
      <header>
        <h1 className="h1-statistics">Statistics</h1>
      </header>
      <div className="div-main-statistics">
        <main className="main-statistics">
          <h2>Statistics</h2>
          <p>Here you can see the statistics of the website</p>
          <section className="section-statistics">
            <div className="div-graph-container">

            <canvas ref={canvasRefDanger} />
            
            </div>
            <div className="div-graph-container">

            <canvas ref={canvasRefSafe} />
            
            </div>
          </section>
        </main>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Statistics;
       