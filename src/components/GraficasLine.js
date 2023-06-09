import React from "react";
import { Chart } from "react-google-charts";
import "../styles/Graficas.css";

function GraficasLine(props) {
  console.log("propsGrafica", props)
  const options = {
    chart: {
      title: props.titulo,
      subtitle: props.descripcion,
    },
  };

  const data = [["Mes", "Pb", "Cu", "Zn", "Au/Ag"]];
  // for para agregar datos de props.data a la data que ocupa la gráfica
  for (var i = 0; i < props.long; i++) {
    data.push([
      props.data[i][0], // Mes
      props.data[i][1], // Pb
      props.data[i][2], // Cu
      props.data[i][3], // Zn
      props.data[i][4], // Au/Ag
    ]);
  }
  //console.log("data", data);
  /* ["Enero", 37.8, 80.8, 41.8],
    ["Febrero", 30.9, 69.5, 32.4],
    ["Marzo", 25.4, 57, 25.7],
    ["Abril", 11.7, 18.8, 10.5],
    ["Mayo", 11.9, 17.6, 10.4],
    ["Junio", 8.8, 13.6, 7.7],
    ["Julio", 7.6, 12.3, 9.6],
    ["Agosto", 12.3, 29.2, 10.6],
    ["Septiembre", 16.9, 42.9, 14.8],
    ["Octubre", 12.8, 30.9, 11.6],
    ["Noviembre", 5.3, 7.9, 4.7],
    ["Diciembre", 6.6, 8.4, 5.2],
*/
  return (
    <div className="contGraficas">
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default GraficasLine;
