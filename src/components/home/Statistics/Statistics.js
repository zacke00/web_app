import React, { useEffect, useState, useRef } from "react";
import Footer from "../../navigation/Footer/Footer";
import Graph from "./graphs/graph";
import "./Statistics.css"


function Statistics() {
  const graphData = [
    { name: "plantation-one", title: "Plantation One" },
    // add more objects here as needed
  ];
  return (
    <div className="div-container-statistics">
      <header>
        <h1>Statistics</h1>
      </header>
      {graphData.map((data) => (
        <div key={data.name}>
        <h1>{data.name}</h1>
        <Graph name={data.name} title={data.title} />
      </div>
      ))}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Statistics;
       