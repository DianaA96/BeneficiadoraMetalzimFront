import React from "react";
import { Chart } from "react-google-charts";

function GraficasColumna(props) {
  //onsole.log("propsGRAFCOL", props);
  var options = {
    title: "Total de embarque de concentrados",
    legend: { position: "top", maxLines: 5 },
    chartArea: { width: "70%", height: "70%" },

    color: ['naranja', '#EF7B30']
  };
/*
  const data = [
    ["Element", "Toneladas", { role: "style" }],
    [props.props[0][0], props.props[0][1], "#F8C5A3"],
    [props.props[1][0], props.props[1][1], "#F18B47"],
    [props.props[2][0], props.props[2][1], "#F4A875"],
    [props.props[3][0], props.props[3][1], "#EF7B30"],
  ];
*/
  var data = [["Element", "Toneladas", { role: "style" }]];
  // for para agregar datos de props.data a la data que ocupa la gráfica
  for (var i = 0; i < props.long; i++) {
    if (props.props[i][1] < 0) { // Si el número es negativo
      data.push([props.props[i][0], (props.props[i][1] * -1), "#F18B47"]);
    } else {
      data.push([props.props[i][0], props.props[i][1], "#F18B47"]);
    }
  }
  // console.log("data", data);

  return (
    <div className="contGraficas">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default GraficasColumna;
