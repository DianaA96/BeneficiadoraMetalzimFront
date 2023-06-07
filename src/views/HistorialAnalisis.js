import React, { useState, useEffect } from "react";
import HeaderDiseno from "../components/HeaderDiseno";
import ListaReportes from "../components/ListaReportes";
import Menu from "../components/Menu";
import GraficasLine from "../components/GraficasLine";
import "../styles/Graficas.css";
import axios from "axios";
import { textAlign } from "@mui/system";
import { Link, Navigate } from "react-router-dom";

function HistorialAnalisis() {
  const [analisisData, setAnalisisData] = useState([]);
  const [dataGraficas, setDataGraficas] = useState([]);
  const [status, setStatus] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3050/lab/labList?filter=1&order=ASC`)
      .then((result) => {
        setStatus("resolved");
        setAnalisisData(result.data);
      })
      .catch((error) => {
        alert(error);
        setError(error);
        setStatus("error");
      });
    axios
      .get(`http://localhost:3050/gerente/grapHistoricas`)
      .then((result) => {
        setDataGraficas(result.data);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, []);

  const reportes = [
    { id: "RE01", fechaMuestreo: "20/04/2023", fechaEnsaye: "20/04/2023" },
    { id: "RE02", fechaMuestreo: "21/04/2023", fechaEnsaye: "20/04/2023" },
    { id: "RE03", fechaMuestreo: "27/04/2023", fechaEnsaye: "20/04/2023" },
  ];

  const columns = React.useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, minWidth: 80 },
    {
      field: "fechaMuestreo",
      headerName: "Fecha Muestreo",
      flex: 1,
      minWidth: 20,
    },
    {
      field: "fechaEnsaye",
      headerName: "Fecha Ensaye",
      flex: 1,
      minWidth: 100,
    },
    { field: "nombreMina", headerName: "Mina", flex: 1, minWidth: 100 },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 100,
      getActions: (params) => [
        <Link
          className="btn-lista link-decoration"
          to={`/reporte-laboratorio/${params.row.nombreMina}/${params.row.fechaEnsaye}`}
          target="_blank"
        >
          Ver
        </Link>,
      ],
    },
  ]);
  if (status === "error") {
    return (
      // NO RESPONDE EL BACK 404
      <Navigate to="/Error404" replace={true} />
    );
  }

  if (status == "resolved") {
    console.log("dataGraficas", dataGraficas);

    // Variable para saber la cantidad de registros(meses) que tiene concentrados
    let myConcentrado = Object.keys(dataGraficas.concentrados);
    // Arreglo para conocer la información de cada mes en el Objeto concentrados de la consulta
    var mes = [];

    // Arreglo para formatear la información de la consulta de concentrados
    var arrayConcentrado = [];
    for (var i = 0; i < myConcentrado.length; i++) {
      // Convierte a número el mes de los registros de la consulta
      mes = Math.floor(myConcentrado[i]);

      // Arreglo que para agregar los valores uno por uno para formatear la información
      var valorConcentrado = [];

      // Casos para agregar el mes que viene en la consulta valorConcentrado
      // Los números de los casos corresponden a cada mes, del 1 al 12
      switch (mes) {
        case 1:
          valorConcentrado.push("Enero");
          break;
        case 2:
          valorConcentrado.push("Febrero");
          break;
        case 3:
          valorConcentrado.push("Marzo");
          break;
        case 4:
          valorConcentrado.push("Abril");
          break;
        case 5:
          valorConcentrado.push("Mayo");
          break;
        case 6:
          valorConcentrado.push("Junio");
          break;
        case 7:
          valorConcentrado.push("Julio");
          break;
        case 8:
          valorConcentrado.push("Agosto");
          break;
        case 9:
          valorConcentrado.push("Septiembre");
          break;
        case 10:
          valorConcentrado.push("Octubre");
          break;
        case 11:
          valorConcentrado.push("Noviembre");
          break;
        case 12:
          valorConcentrado.push("Diciembre");
          break;
        default:
          console.log(`Lo siento, ${mes} no corresponde a ningún mes.`);
      }

      // Variable que guarda los registros por mes que regresa la consulta. Es un arreglo
      var arrConc = dataGraficas.concentrados[mes];
      // For para iterar los datos de arrConc y poder agregar uno por uno al arreglo final arrayConcentrado
      for (var x = 0; x < arrConc.length; x++) {
        valorConcentrado.push(arrConc[x]);
      }
      arrayConcentrado.push(valorConcentrado);
      arrConc = []; // Limpiando la variable totalTritur para la siguiente iteración
    }
    console.log("arrayConcentrado", arrayConcentrado);
    return (
      <>
        <body>
          <HeaderDiseno
            titulo="Historial de análisis"
            subtitulo="Consulta el historial de los análisis de laboratorio realizados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
            isDate={false}
          />
          <ListaReportes
            columns={columns}
            data={analisisData}
            titulo="Todos los reportes"
          ></ListaReportes>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              marginBottom: "5rem",
            }}
          >
            <div
              className="division"
              style={{ display: "flex", alignSelf: "center", width: "80%" }}
            >
              <p className="myP">Gráficas históricas</p>
              <hr className="myhr" style={{ color: "#EF7B30", width: "80%" }} />
            </div>
            <GraficasLine
              titulo={"Concentrados"}
              descripcion={"en toneladas"}
              data={arrayConcentrado}
              long={arrayConcentrado.length}
            ></GraficasLine>
          </div>
        </body>
        <footer>
          <Menu
            rol="laboratorista"
            activeTab="history"
            landing="/laboratorio"
          ></Menu>
        </footer>
      </>
    );
  }
}

export default HistorialAnalisis;
