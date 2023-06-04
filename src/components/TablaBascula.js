import React from "react";
import "../styles/TablaBascula.css";

const TablaBascula = ({ data, encabezado }) => {
  return (
    <>
      <table className="tablonaB">
        <thead>
          <tr>
            <th></th>
            <th style={{ color: "#EF7B30" }}>
              {encabezado[0]}
              <span>ton</span>
            </th>
            <th>
              {encabezado[1]}
              <span>ton</span>
            </th>
            <th style={{ color: "#EF7B30" }}>
              {encabezado[2]}
              <span>ton</span>
            </th>
            <th>
              {encabezado[3]}
              <span>ton</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && <p>Cargando... </p>}
          {data.map((elemento, i) => {
            return i < 5 ? (
              <tr key={i}>
                <td>{elemento.nombre}</td>
                <td>{elemento.col1}</td>
                <td>{elemento.col2}</td>
                <td>{elemento.col3}</td>
                <td>{elemento.col4}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablaBascula;
