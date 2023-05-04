import React from "react";
import { Chart } from "react-google-charts";
import "../styles/Graficas.css";

function GraficasArea(props) {

  var options = {
    isStacked: true,
    height: 350,
    legend: { position: "top", maxLines: 5 },
    vAxis: { minValue: 0 },
    hAxis: {title: 'Año',  titleTextStyle: {color: '#333'}},
  };

  const data = [
    ["Año", props.titulo, { role: "style" }],
    ["Enero", 1000, "#F8C5A3"],
    ["Febero", 1170, "#F8C5A3"],
    ["Marzo", 660, "#F8C5A3"],
    ["Abril", 1030, "#F8C5A3"],
    ["Junio", 1020, "#F8C5A3"],
    ["Julio", 1800, "#F8C5A3"],
    ["Agosto", 1930, "#F8C5A3"],
    ["Septiembre", 2330, "#F8C5A3"],
    ["Ocrtubre", 1000, "#F8C5A3"],
    ["Noviembre", 1170, "#F8C5A3"],
    ["Diciembre", 660, "#F8C5A3"],
  ];

  return (
    <div className={props.class}>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default GraficasArea