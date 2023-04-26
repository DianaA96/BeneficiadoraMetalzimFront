import React from "react";
import { Chart } from "react-google-charts";

const titulo = "Acarreo"
const yGrafica = "Año"
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"]

export const data = [
  [yGrafica, titulo],
  [mes[0], 1000],
  [mes[1], 1170],
  [mes[2], 660],
  [mes[3], 1030],
  [mes[4], 1020],
  [mes[5], 1800],
  [mes[6], 1930],
  [mes[7], 2330],
];

export const options = {
  chart: {
    title: titulo,
  },
  isStacked: true,
  height: 300,
  legend: { position: "top", maxLines: 5 },
  vAxis: { minValue: 0 },
};

export function GraficasArea() {
  return (
    <Chart
      chartType="AreaChart"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default GraficasArea