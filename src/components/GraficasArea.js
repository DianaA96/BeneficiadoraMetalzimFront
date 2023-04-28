import React from "react";
import { Chart } from "react-google-charts";
import "../styles/Graficas.css";

const yGrafica = "Año"

export function GraficasArea(props) {

  const options = {
    chart: {
      title: props.titulo,
    },
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 5 },
    vAxis: { minValue: 0 },
  };

  const data = [
    [yGrafica, props.titulo],
    ["Enero", 1000],
    ["Febero", 1170],
    ["Marzo", 660],
    ["Abril", 1030],
    ["Junio", 1020],
    ["Julio", 1800],
    ["Agosto", 1930],
    ["Septiembre", 2330],
    ["Ocrtubre", 1000],
    ["Noviembre", 1170],
    ["Diciembre", 660],
  ];

  return (
    <div className="contGraficas">
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