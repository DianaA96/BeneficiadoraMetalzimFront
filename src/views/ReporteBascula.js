import React, { useState, useEffect } from "react";
import Tabla from "../components/TablaBascula";
import "../styles/ReporteBascula.css";
import HeaderDiseno from "../components/HeaderDiseno";
import GraficasPie from "../components/GraficasPie";
import GraficasColumna from "../components/GraficasColumna";
import Menu from "../components/Menu";
import { Link, Navigate, useParams } from "react-router-dom";
import "../styles/button.css";
import axios from "axios";
import NoDataFound from "./NoDataFound";
import moment from "moment/moment";

const ReporteBascula = ({ rol }) => {

  let { fecha } = useParams();
  const fechaDate = moment(fecha)

  // Arreglo para encabezado de tabla de Movimiento de Mineral
  let encabezadoBascula = [
    "Estancia inicial",
    "Acarreo",
    "Trituradas",
    "Estancia patios",
  ];
  // Arreglo para encabezado de tabla de Embarque de Concentrados
  let encabezadoEmbarques = ["Pb", "Cu", "Zn", "Au/Ag"];

  const [tableData, setTableData] = useState([]);
  const [tableDataConc, setTableDataConc] = useState([]);

  const [statusMineral, setStatusMineral] = useState("idle");
  const [statusEmbarque, setStatusEmbarque] = useState("idle");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  var check = 0;

  useEffect(() => {
    setStatus("loading");
    // Primera solicitud GET
    axios
      .get(`http://localhost:3050/gerente/movMineral?fecha=${fecha}`)
      .then((result) => {
        setTableData(result.data);
        setStatusMineral("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatusMineral("error");
      });
    // Segunda solicitud GET
    axios
      .get(`http://localhost:3050/gerente/embarque?fecha=${fecha}`)
      .then((result) => {
        setTableDataConc(result.data);
        setStatusEmbarque("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatusEmbarque("error");
      });
  }, [check]);
  console.log("tableDataConc", tableDataConc);

  if (statusMineral === "error" || statusEmbarque === "error") {
    return (
      // NO RESPONDE EL BACK 404
      <Navigate to="/Error404" replace={true} />
    );
  }

  // Se ejecuta cuando statusMineral y statusEmbarque es "resolved"
  // NOTA: La respuesta del Back cuando no hay registros regresa algo vacio
  if (statusMineral === "resolved" && statusEmbarque === "resolved") {
    // Variables para manejar el Conditional Rendering
    var myMineral = false;
    var myEmbarque = false;

    // MOVIMIENTO MINERAL DATA
    // Variables para calcular totales
    var totalAcarreo = 0;
    var totalTrituradas = 0;
    var totalInicial = 0;
    var totalPatios = 0;
    // Arreglos para formatear la información de las GRÁFICAS PAI
    var pieInicial = [];
    var pieAcarreo = [];
    var pieTrituradas = [];
    var piePatios = [];
    // Objeto para construir la información de la consulta
    var objetoBascula = {
      nombre: "",
      col1: 0,
      col2: 0,
      col3: 0,
      col4: 0,
    };
    // Mi nuevo arreglo para formatear la información de la consulta
    var arrayBascula = [];

    // EMBARQUES DATA
    // Variables para calcular totales
    var totalPb = 0;
    var totalCu = 0;
    var totalZn = 0;
    var totalAu = 0;

   // Objeto para construir la información de la consulta
    var objetoEmbarque = {
      nombre: "",
      col1: 0,
      col2: 0,
      col3: 0,
      col4: 0,
    };
    // Mi nuevo arreglo para formatear la información de la consulta
    var arrayEmbarques = [];

    // if para verificar que haya registros en la respuesta del Back - Movimiento de Mineral
    if (tableData.length > 0) {
      // Variable true indica que sí hay registros en la respuesta del back
      myMineral = true;

      // MOVIMIENTO DE MINERAL DATA
      // For para calcular totales y añadir valores al objeto objetoEmbarque
      for (var i = 0; i < tableData.length; i++) {
        objetoBascula.nombre = tableData[i].nombre;
        if(tableData[i].acarreo) { // Si existe el registro
          totalAcarreo += tableData[i].acarreo;
          objetoBascula.col1 = tableData[i].acarreo.toFixed(2);
        } else { // Si no existe el registro
          totalAcarreo += 0;
          objetoBascula.col1 = 0;
        }
        if(tableData[i].trituradas) {
          totalTrituradas += tableData[i].trituradas;
          objetoBascula.col2 = tableData[i].trituradas.toFixed(2);
        } else {
          totalTrituradas += 0;
          objetoBascula.col2 = 0;
        }
        if(tableData[i].existenciaInicial) {
          totalInicial += tableData[i].existenciaInicial;
          objetoBascula.col3 = tableData[i].existenciaInicial.toFixed(2);
        } else {
          totalInicial += 0;
          objetoBascula.col3 = 0;
        }
        if(tableData[i].existenciaPatios) {
          totalPatios += tableData[i].existenciaPatios;
          objetoBascula.col4 = tableData[i].existenciaPatios.toFixed(2);
        } else {
          totalPatios += 0;
          objetoBascula.col4 = 0;
        }
        arrayBascula.push(objetoBascula); // Añadiendo al arreglo el objetoBascula completo
        objetoBascula = { // limpiando el objetoBascula
          nombre: "",
          col1: 0,
          col2: 0,
          col3: 0,
          col4: 0,
        };
      }
      // Añadiendo al objetoBascula los totales calculados
      objetoBascula = {
        nombre: "total",
        col1: totalInicial.toFixed(2),
        col2: totalAcarreo.toFixed(2),
        col3: totalTrituradas.toFixed(2),
        col4: totalPatios.toFixed(2),
      };
      // Añadiendo al arreglo el objetoBascula con los registros completos
      arrayBascula.push(objetoBascula);
      console.log("arrayBascula", arrayBascula);
      
      // For para formatear la data para las GRÁFICAS PAI
      for (var i = 0; i < tableData.length; i++) {
        pieInicial.push([arrayBascula[i].nombre, parseFloat(arrayBascula[i].col1)]);
        pieAcarreo.push([arrayBascula[i].nombre, parseFloat(arrayBascula[i].col2)]);
        pieTrituradas.push([arrayBascula[i].nombre, parseFloat(arrayBascula[i].col3)]);
        piePatios.push([arrayBascula[i].nombre, parseFloat(arrayBascula[i].col4)]);
      }
    }
   
    // if para verificar que haya registros en la respuesta del Back -  Concentrado de Embarques
    if (tableDataConc.length > 0) {
      // Variable true indica que sí hay registros en la respuesta del back
      myEmbarque = true;

      // MOVIMIENTO DE EMBARQUE DE CONCENTRADOS
      // For para calcular totales y añadir valores al objeto objetoEmbarque
      for (var i = 0; i < tableDataConc.length; i++) {
        objetoEmbarque.nombre = tableDataConc[i].mina;
        if(tableDataConc[i].Pb) { // Si existe el registro
          totalPb += tableDataConc[i].Pb;
          objetoEmbarque.col1 = tableDataConc[i].Pb.toFixed(2);
        } else { // Si no existe el registro
          totalPb += 0;
          objetoEmbarque.col1 = 0;
        }
        if(tableDataConc[i].Cu) {
          totalCu += tableDataConc[i].Cu;
          objetoEmbarque.col2 = tableDataConc[i].Cu.toFixed(2);
        } else {
          totalCu += 0;
          objetoEmbarque.col2 = 0;
        }
        if(tableDataConc[i].Zn) {
          totalZn += tableDataConc[i].Zn;
          objetoEmbarque.col3 = tableDataConc[i].Zn.toFixed(2);
        } else {
          totalZn += 0;
          objetoEmbarque.col3 = 0;
        }
        if(tableDataConc[i]["Au/Ag"]) {
          totalAu += tableDataConc[i]["Au/Ag"];
          objetoEmbarque.col4 = tableDataConc[i]["Au/Ag"].toFixed(2);
        } else {
          totalAu += 0;
          objetoEmbarque.col4 = 0;
        }
        arrayEmbarques.push(objetoEmbarque); // Añadiendo al arreglo el objetoEmbarque completo
        objetoEmbarque = { // limpiando el objetoEmbarque
          nombre: "",
          col1: 0,
          col2: 0,
          col3: 0,
          col4: 0,
        };
      }
      // Añadiendo al objetoEmbarque los totales calculados
      objetoEmbarque = {
        nombre: "total",
        col1: totalPb.toFixed(2),
        col2: totalCu.toFixed(2),
        col3: totalZn.toFixed(2),
        col4: totalAu.toFixed(2),
      };
      // Añadiendo al arreglo el objetoEmbarque con los registros completos
      arrayEmbarques.push(objetoEmbarque);
      console.log("arrayEmbarques", arrayEmbarques);
      
      // Arreglo para formatear la información de las GRÁFICA DE COLUMNAS
      var embarquesCol = [
        ["Pb", totalPb],
        ["Cu", totalCu],
        ["Zn", totalZn],
        ["Au", totalAu],
      ];
    }

    // Estado de la respuesta de las consutlas (true: sí regresó registros. False: no regresó registros)
    console.log("myMineral", myMineral);
    console.log("myEmbarque", myEmbarque);

    return (
      <>
        <header>
          <HeaderDiseno
            titulo={"Reporte movimiento de mineral báscula"}
            subtitulo={
              "Consulta el movimiento del área de recepción registrado diariamente por el operario de báscula."
            }
            isDate={true}
          />
        </header>

        <body className="mybody">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mycard">
              {myMineral ? (
                <div id="movimientoMineralArea">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Tabla data={arrayBascula} encabezado={encabezadoBascula} />
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
                      <GraficasPie
                        tituloG={"Trituradas"}
                        data={pieTrituradas}
                      />
                    </div>
                    <div>
                      <GraficasPie
                        tituloG={"Existencia patios"}
                        data={piePatios}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <NoDataFound/>
              )}

              <div id="embarquesArea">
                <div className="division">
                  <p className="myP">Embarque de concentrados</p>
                  <hr className="myhr" />
                </div>
                {myEmbarque ? (
                  <div className="embarques">
                    <GraficasColumna
                    props={embarquesCol}
                    long = {embarquesCol.length}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "22rem",
                      }}
                    >
                      <Tabla
                        data={arrayEmbarques}
                        encabezado={encabezadoEmbarques}
                      />
                    </div>
                  </div>
                ) : (
                  <NoDataFound/>
                )}
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
              onClick={() => window.print() }
            >
              Imprimir
              <span className="separatorButton" />
              <span class="material-symbols-outlined">sync_saved_locally</span>
            </button>

            <Link to="/historial-bascula_basculaview">
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
