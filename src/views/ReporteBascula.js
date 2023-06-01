import React, { useState, useEffect } from "react";
import Tabla from "../components/TablaBascula";
import "../styles/ReporteBascula.css";
import HeaderDiseno from "../components/HeaderDiseno";
import GraficasPie from "../components/GraficasPie";
import GraficasColumna from "../components/GraficasColumna";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import "../styles/button.css";
import axios from "axios";

const ReporteBascula = ({ rol }) => {
  let encabezadoBascula = [
    "Estancia inicial",
    "Acarreo",
    "Trituradas",
    "Estancia patios"
  ];

  let encabezadoEmbarques = [
    "Pb",
    "Cu",
    "Zn",
    "Au/Ag"
  ];

  const [tableData, setTableData] = useState([]);
  const [tableDataConc, setTableDataConc] = useState([]);

  const [status, setStatus] = useState("idle");
  const [status2, setStatus2] = useState("idle");
  const [error, setError] = useState(null);

  var check = 0;

  useEffect(() => {
    setStatus("loading");
    // Primera solicitud GET
    axios
      .get(`http://localhost:3050/gerente/movMineral?fecha=2023-05-04`)
      .then((result) => {
        setTableData(result.data);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
    // Segunda solicitud GET
    axios
      .get(`http://localhost:3050/gerente/embarque?fecha=2023-05-16`)
      .then((result) => {
        setTableDataConc(result.data);
        setStatus2("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus2("error");
      });
  
  }, [check]);

  if (status === "error") {
    return (
      <div>Error</div> //Cambiar por alerta de error
    );
  }

  if (status == "resolved") {
    //console.log("emabrques", tableDataConc)
    //console.log("data", tableData);

    // Calculando totales
    var totalAcarreo = 0;
    var totalTrituradas = 0;
    var totalInicial = 0;
    var totalPatios = 0;

    var totalPb = 0;
    var totalCu = 0;
    var totalZn = 0;
    var totalAu = 0;

    // Data de Movimiento en minas
    for (var i = 0; i < tableData.length; i++) {
      totalAcarreo += tableData[i].acarreo;
      totalTrituradas += tableData[i].trituradas;
      totalInicial += tableData[i].existenciaInicial;
      totalPatios += tableData[i].existenciaPatios;
    }
    // Data de Embarques
    for (var i = 0; i < tableData.length; i++) {
      totalPb += tableData[i].acarreo;
      totalCu += tableData[i].trituradas;
      totalZn += tableData[i].existenciaInicial;
      totalAu += tableData[i].existenciaPatios;
    }

    // Mi nuevo arreglo de objetos para formatear mi información de la consulta
    var nuevaData = [];
    // MOVIMIENTO DE MINERAL DATA
    for (var i = 0; i < tableData.length; i++) {
      nuevaData[i] = { // Agregando filas originales de la consulta
        nombre: tableData[i].nombre,
        col1: tableData[i].existenciaInicial.toFixed(2),
        col2: tableData[i].acarreo.toFixed(2),
        col3: tableData[i].trituradas.toFixed(2),
        col4: tableData[i].existenciaPatios.toFixed(2),
      };
      nuevaData[3] = { // Agregrando fila de totales
        nombre: "total",
        col1: totalInicial.toFixed(2),
        col2: totalAcarreo.toFixed(2),
        col3: totalTrituradas.toFixed(2),
        col4: totalPatios.toFixed(2),
      };
    }
    console.log("nuevaData", nuevaData);

    // EMBARQUES DATA
    var nuevaEmbarques = [];

    nuevaEmbarques[0] = { // Agregando filas originales de la consulta
      nombre: "Balcones",
      col1: tableDataConc.Balcones.Pb.toFixed(2),
      col2: tableDataConc.Balcones.Cu.toFixed(2),
      col3: tableDataConc.Balcones.Zn.toFixed(2),
      col4: tableDataConc.Balcones['Au/Ag'].toFixed(2),
    };
    nuevaEmbarques[1] = { // Agregando filas originales de la consulta
      nombre: "Guadalupe",
      col1: tableDataConc.Guadalupe.Pb.toFixed(2),
      col2: tableDataConc.Guadalupe.Cu.toFixed(2),
      col3: tableDataConc.Guadalupe.Zn.toFixed(2),
      col4: tableDataConc.Guadalupe['Au/Ag'].toFixed(2),
    };
    nuevaEmbarques[2] = { // Agregando filas originales de la consulta
      nombre: "Jales",
      col1: tableDataConc.Jales.Pb.toFixed(2),
      col2: tableDataConc.Jales.Cu.toFixed(2),
      col3: tableDataConc.Jales.Zn.toFixed(2),
      col4: tableDataConc.Jales['Au/Ag'].toFixed(2),
    };
    nuevaEmbarques[3] = { // Agregando filas originales de la consulta
      nombre: "Minesites",
      col1: tableDataConc.Minesites.Pb.toFixed(2),
      col2: tableDataConc.Minesites.Cu.toFixed(2),
      col3: tableDataConc.Minesites.Zn.toFixed(2),
      col4: tableDataConc.Minesites['Au/Ag'].toFixed(2),
    };
    nuevaEmbarques[4] = { // Agregrando fila de totales
      nombre: "total",
      col1: totalPb.toFixed(2),
      col2: totalCu.toFixed(2),
      col3: totalZn.toFixed(2),
      col4: totalAu.toFixed(2),
    };    

    // Arreglos para formatear la información de las GRÁFICAS PAI
    var pieInicial = [];
    var pieAcarreo = [];
    var pieTrituradas = [];
    var piePatios = [];
    for (var i = 0; i < nuevaData.length - 1; i++) {
      pieInicial[i] = [
        nuevaData[i].nombre,
        Math.floor(nuevaData[i].col1),
      ];
      pieAcarreo[i] = [nuevaData[i].nombre, Math.floor(nuevaData[i].col2)];
      pieTrituradas[i] = [
        nuevaData[i].nombre,
        Math.floor(nuevaData[i].col3),
      ];
      piePatios[i] = [
        nuevaData[i].nombre,
        Math.floor(nuevaData[i].col4),
      ];
    }

    // Arreglo para formatear la información de las GRÁFICA DE BARRAS
    let embarquesCol = [
      ["Pb", totalPb],
      ["Cu", totalCu],
      ["Zn", totalZn],
      ["Au", totalAu],
    ];
      
    //console.log("embarquesCol", embarquesCol);
    
    /*
    console.log("pieInicial", pieInicial);
    console.log("pieInicial", pieAcarreo);
    console.log("pieInicial", pieTrituradas);
    console.log("pieInicial", piePatios);
     */

    return (
      <>
        <body className="mybody">
          <HeaderDiseno
            titulo={"Reporte movimiento de mineral báscula"}
            subtitulo={
              "Consulta el movimiento del área de recepción registrado diariamente por el operario de báscula."
            }
            isDate={true}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mycard">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Tabla data={nuevaData} encabezado={encabezadoBascula} />
              </div>

              <div className="contentPie">
                <div>
                  <GraficasPie
                    tituloG={"Existencia inicial"}
                    data={pieInicial}
                  />
                </div>
                <div>
                  <GraficasPie tituloG={"Acarreo"} data={pieAcarreo} />
                </div>
                <div>
                  <GraficasPie tituloG={"Trituradas"} data={pieTrituradas} />
                </div>
                <div>
                  <GraficasPie tituloG={"Existencia patios"} data={piePatios} />
                </div>
              </div>

              <div className="division">
                <p className="myP">Embarque de concentrados</p>
                <hr className="myhr" />
              </div>

              <div className="embarques">
                <GraficasColumna props={embarquesCol}/>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "22rem",
                  }}
                >
                  <Tabla data={nuevaEmbarques} encabezado={encabezadoEmbarques} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="stripBotones"
            style={{
              marginBottom: "5rem",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          >
            <button
              className="guardarProgreso"
              style={{ width: "15rem", backgroundColor: "#817C7C" }}
            >
              Imprimir
              <span className="separatorButton" />
              <span class="material-symbols-outlined">sync_saved_locally</span>
            </button>

            <Link to="/historial-bascula">
              <button className="btn-lista" style={{ width: "12rem" }}>
                Ir al historial
              </button>
            </Link>
          </div>
        </body>
        <footer>
          {
            /**Menu Admin */
            rol == "admin" ? (
              <Menu rol="admin" activeTab="scale" landing="/admin"></Menu>
            ) : null
          }

          {
            /**Menu Gerente */
            rol == "gerente" ? (
              <Menu rol="gerente" activeTab="scale" landing="/gerencia"></Menu>
            ) : null
          }

          {
            /**Menu Bascula */
            rol == "bascula" ? (
              <Menu rol="bascula" activeTab="history" landing="/bascula"></Menu>
            ) : null
          }
        </footer>
      </>
    );
  }
};

export default ReporteBascula;
