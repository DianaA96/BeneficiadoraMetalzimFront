import React from "react";
import "../styles/ReporteBascula.css";
import { Chart } from "react-google-charts";

function GraficasPie(props) {
  console.log("propsPie", props)
  var options = {
    title: props.tituloG,
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'white',
    },
    legend: { position: "top", maxLines: 5 },
    slices: {
      0: { color: '#EF7B30' },
      1: { color: '#FEB731' },
      2: { color: '#F4A875' },
    },
  };

  var data = [
    ["Element", "Toneladas", { role: "style" }],
    [props.data[0][0], props.data[0][1], "#F8C5A3"],
    [props.data[1][0], props.data[1][1], "#F8C5A3"],
    [props.data[2][0], props.data[2][1], "#F8C5A3"],
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