import React from "react";
import "../styles/ReporteBascula.css";
import { Chart } from "react-google-charts";

function GraficasPie(props) {

  var options = {
    title: props.tituloG,
    pieHole: 0.5,
    legend: { position: "top", maxLines: 5 },
  };

  var data = [
    ["Compañia minera", "Toneladas"],
    ["Minesites", 11],
    ["Balcones", 2],
    ["Guadalupe", 2],
  ];

  return (
    <div className="contGraficasPie">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
     
    
  );
}

export default GraficasPie