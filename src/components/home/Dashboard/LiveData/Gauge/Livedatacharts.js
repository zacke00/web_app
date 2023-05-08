import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import "./Livedatacharts.css"

const GaugeChart = ({ value, min, max, label , color}) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  
  
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
  

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);

    const config = {
      type: 'bar',
      data: {
        labels: [label],
        datasets: [
          {
            label: [label],
            data: [value],
            backgroundColor: [gradient],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            formatter: (value, ctx) => `${value} °C`,
            anchor: 'end',
            align: 'top',
            
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: true,
            min: min || 0,
            max: max || 100,
            ticks: {
              color: '#ffffff',
              stepSize: 1,
            },
          },
        },
      },
    };

    if (!chartRef.current) {
      chartRef.current = new Chart(ctx, config);
    }

    return () => {
      chartRef.current.destroy();
      chartRef.current = null;
      
    };
  }, [min, max, label, color]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [value];
      chartRef.current.update();
    }
  }, [value]);

  return (
    <div>
      <div>
        <canvas className='canvas-chart' ref={canvasRef} />
      </div>
      {label && <div style={{color:"#4caf50"}}>{label}</div>}
    </div>
  );
};

export default GaugeChart;