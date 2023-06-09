import React from "react";
import "../styles/ReporteBascula.css";
import { Chart } from "react-google-charts";

function GraficasPie(props) {
  //console.log("propsPie", props)
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
      3: { color: '#F8C5A3' },
      4: { color: '#F18B47' },
    },
  };

  var data = [
    ["Element", "Toneladas"],
  ];
  // for para agregar datos de props.data a la data que ocupa la gráfica
  for(var i = 0; i < props.long; i++){
   if(props.data[i][1] < 0){ // Si el número es negativo
    data.push([props.data[i][0], (props.data[i][1]*(-1))])
   } else {
    data.push([props.data[i][0], props.data[i][1]])
   }
  }
 // console.log("data", data);
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