import React from "react";
import { Chart } from "react-google-charts";
import "../styles/Graficas.css";

function GraficasArea(props) {

  var options = {
    isStacked: true,
    height: 350,
    legend: { position: "top", maxLines: 5 },
    vAxis: { minValue: 0 },
    hAxis: {title: 'Mes',  titleTextStyle: {color: '#333'}},
  };

  const data = [
    ["Mes", props.titulo, { role: "style" }],
  ];
  // for para agregar datos de props.data a la data que ocupa la gráfica
  for(var i = 0; i < props.long; i++){
    data.push([props.data[i][0], props.data[i][1], "#F8C5A3"])
  }
  //console.log("data", data);
  
  return (
    <div className="contGraficasPie">
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