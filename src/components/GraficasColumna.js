import React from "react";
import { Chart } from "react-google-charts";

function GraficasColumna(props) {
  //onsole.log("propsGRAFCOL", props);
  var options = {
    title: "Total de embarque de concentrados",
    legend: { position: "top", maxLines: 5 },
    chartArea: {width: '70%', height: '70%'},
  };

  const data = [
    ["Element", "Toneladas", { role: "style" }],
    [props.props[0][0], props.props[0][1], "#F8C5A3"],
    [props.props[1][0], props.props[1][1], "#F18B47"],
    [props.props[2][0], props.props[2][1], "#F4A875"],
    [props.props[3][0], props.props[3][1], "#EF7B30"],
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