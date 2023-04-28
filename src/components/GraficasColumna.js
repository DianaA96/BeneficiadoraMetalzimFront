import React from "react";
import { Chart } from "react-google-charts";

const titulo = "Concentrados de Plomo"
const descripcion = "en toneladas"
const yGrafica = "Mes"
const opciones = ["Pb", "Cu", "Zn", "Au/Ag"]

export const data = [
    ["Element", "", { role: "style" }],
    [opciones[0], 8.94, "#F8C5A3"],
    [opciones[1], 10.49, "#F18B47"],
    [opciones[2], 19.3, "#F4A875"],
    [opciones[3], 21.45, "#EF7B30"], // CSS-style declaration
  ];

export function GraficasColumna() {
    return (
      <div className="contPie">
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        />
      </div>
    );
  }

export default GraficasColumna