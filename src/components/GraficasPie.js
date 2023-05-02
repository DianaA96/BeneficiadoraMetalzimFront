import React from "react";
import "../styles/ReporteBascula.css";
import { Chart } from "react-google-charts";


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
  pieHole: 0.6,
  is3D: false,
};

var titulo = ""

function GraficasPie(props) {
  titulo = props.tituloG
  return (
    <div className="contGraficas">
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