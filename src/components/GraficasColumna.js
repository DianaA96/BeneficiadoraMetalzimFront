import React from "react";
import { Chart } from "react-google-charts";

function GraficasColumna(props) {

  var options = {
    title: "Total de embarque de concentrados",
    legend: { position: "top", maxLines: 5 },
    chartArea: {width: '70%', height: '70%'},
  };

  const data = [
    ["Element", "Toneladas", { role: "style" }],
    ["Ag", 8.94, "#F8C5A3"],
    ["Pb", 10.49, "#F18B47"],
    ["Zn", 19.3, "#F4A875"],
    ["Cu", 21.45, "#EF7B30"],
  ];

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

export default GraficasColumna