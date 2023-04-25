import React from "react";
import { Chart } from "react-google-charts";

const titulo = "Acarreo"
const descripcion = "en toneladas"
const yGrafica = "Mes"
const opciones = ["Minesites", "Balcones", "Guadalupe"]

const data = [
  ["Task", "Hours per Day"],
  [opciones[0], 11],
  [opciones[1], 2],
  [opciones[2], 2],// CSS-style declaration
];

const options = {
  title: titulo,
  pieHole: 0.4,
  is3D: false,
};

export function GraficasPie() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default GraficasPie