import React, { useState, useEffect } from "react";
import HeaderDiseno from "../components/HeaderDiseno";
import ListaReportes from "../components/ListaReportes";
import Menu from "../components/Menu";
import GraficasArea from "../components/GraficasArea";
import GraficasLine from "../components/GraficasLine";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
function HistorialBascula({ rol }) {
  const reportes = [
    {
      id: "RE01",
      fecha: "26/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE02",
      fecha: "27/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE03",
      fecha: "28/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE04",
      fecha: "29/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE05",
      fecha: "12/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE06",
      fecha: "15/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
    {
      id: "RE07",
      fecha: "21/04/2023",
      existenciaInicial: 412,
      acarreo: 562,
      trituradas: 343,
      patios: 623,
    },
  ];
  const columns = React.useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 80 },
    { field: "fecha", headerName: "Fecha", flex: 1, maxWidth: 120 },
    {
      field: "existenciaInicial",
      headerName: "Existencia Inicial",
      flex: 1,
      minWidth: 100,
    },
    { field: "acarreo", headerName: "Acarreo", flex: 1, minWidth: 100 },
    { field: "trituradas", headerName: "Trituradas", flex: 1, minWidth: 100 },
    { field: "patios", headerName: "Patios", flex: 1, minWidth: 100 },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 100,
      getActions: (params) => [
        <Link
          className="btn-lista link-decoration"
          to={`/reporte-bascula_adminview`}
          target="_blank"
        >
          Ver
        </Link>,
      ],
    },
  ]);
  const [dataGraficas, setDataGraficas] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  var check = 0;
  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3050/gerente/grapHistoricas`)
      .then((result) => {
        setDataGraficas(result.data);
        setStatus("resolved");
      })
      // Aquí van las demás solicitudes
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [check]);
  if (status === "error") {
    return (
      // NO RESPONDE EL BACK 404
      <Navigate to="/Error404" replace={true} />
    );
  }

  if (status == "resolved") {
    console.log("dataGraficas", dataGraficas);

    // Variable para saber la cantidad de registros(meses) que tiene acarreo, trituradas
    let myAcarreo = Object.keys(dataGraficas.acarreo);
    let myTrituradas = Object.keys(dataGraficas.trituradas);
    let myConcentrado = Object.keys(dataGraficas.concentrados);

    // Variables para calcular la suma total por mes de Acarreo, Trituradas
    var totalAcarreo = 0;
    var totalTritur = 0;

    // Arreglo para conocer la información de cada mes en el Objeto acarreo de la consulta
    var mes = [];

    // Arreglo para formatear la información de la consulta de Acarreo
    var arrayAcarreo = [];
    var arrayTrituradas = [];
    var arrayConcentrado = [];

    // For para iterar los registros que vienen en la consulta del objeto Acarreo
    for (var i = 0; i < myAcarreo.length; i++) {
      // Convierte a número el mes de los registros de la consulta
      mes = Math.floor(myAcarreo[i]);
      // Función que hace la suma de las cantidades de los registros por mes
      // Regresa un número entero, correspondiente a la cantidad de acarreo total por cada mes
      dataGraficas.acarreo[mes].forEach(function (a) {
        totalAcarreo += a;
      });
      // Casos para agregar un nuevo arreglo en el fromato ["mes", cantidad] al arreglo final arrayAcarreo
      // Los números de los casos corresponden a cada mes, del 1 al 12
      switch (mes) {
        case 1:
          arrayAcarreo.push(["Enero", totalAcarreo]);
          break;
        case 2:
          arrayAcarreo.push(["Febrero", totalAcarreo]);
          break;
        case 3:
          arrayAcarreo.push(["Marzo", totalAcarreo]);
          break;
        case 4:
          arrayAcarreo.push(["Abril", totalAcarreo]);
          break;
        case 5:
          arrayAcarreo.push(["Mayo", totalAcarreo]);
          break;
        case 6:
          arrayAcarreo.push(["Junio", totalAcarreo]);
          break;
        case 7:
          arrayAcarreo.push(["Julio", totalAcarreo]);
          break;
        case 8:
          arrayAcarreo.push(["Agosto", totalAcarreo]);
          break;
        case 9:
          arrayAcarreo.push(["Septiembre", totalAcarreo]);
          break;
        case 10:
          arrayAcarreo.push(["Octubre", totalAcarreo]);
          break;
        case 11:
          arrayAcarreo.push(["Noviembre", totalAcarreo]);
          break;
        case 12:
          arrayAcarreo.push(["Diciembre", totalAcarreo]);
          break;
        default:
          console.log(`Lo siento, ${mes} no corresponde a ningún mes.`);
      }
      totalAcarreo = 0; // Limpiando la variable totalAcarreo para la siguiente iteración
    }
    console.log("arrayAcarreo", arrayAcarreo);

    for (var i = 0; i < myTrituradas.length; i++) {
      // Convierte a número el mes de los registros de la consulta
      mes = Math.floor(myTrituradas[i]);
      // Función que hace la suma de las cantidades de los registros por mes
      // Regresa un número entero, correspondiente a la cantidad de acarreo total por cada mes
      dataGraficas.trituradas[mes].forEach(function (a) {
        totalTritur += a;
      });
      // Casos para agregar un nuevo arreglo en el fromato ["mes", cantidad] al arreglo final arrayAcarreo
      // Los números de los casos corresponden a cada mes, del 1 al 12
      switch (mes) {
        case 1:
          arrayTrituradas.push(["Enero", totalTritur]);
          break;
        case 2:
          arrayTrituradas.push(["Febrero", totalTritur]);
          break;
        case 3:
          arrayTrituradas.push(["Marzo", totalTritur]);
          break;
        case 4:
          arrayTrituradas.push(["Abril", totalTritur]);
          break;
        case 5:
          arrayTrituradas.push(["Mayo", totalTritur]);
          break;
        case 6:
          arrayTrituradas.push(["Junio", totalTritur]);
          break;
        case 7:
          arrayTrituradas.push(["Julio", totalTritur]);
          break;
        case 8:
          arrayTrituradas.push(["Agosto", totalTritur]);
          break;
        case 9:
          arrayTrituradas.push(["Septiembre", totalTritur]);
          break;
        case 10:
          arrayTrituradas.push(["Octubre", totalTritur]);
          break;
        case 11:
          arrayTrituradas.push(["Noviembre", totalTritur]);
          break;
        case 12:
          arrayTrituradas.push(["Diciembre", totalTritur]);
          break;
        default:
          console.log(`Lo siento, ${mes} no corresponde a ningún mes.`);
      }
      totalTritur = 0; // Limpiando la variable totalTritur para la siguiente iteración
    }
    console.log("arrayTrituradas", arrayTrituradas);

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

    const options = [
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
      { value: "2025", label: "2025" },
    ];

    return (
      <>
        <body>
          <HeaderDiseno
            titulo="Historial - Reporte de Báscula"
            subtitulo="Consulta el historial de los reportes de báscula generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
            isDate={false}
          />
          <ListaReportes
            columns={columns}
            data={reportes}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <GraficasArea
                titulo={"Acarreo"}
                data={arrayAcarreo}
                long={arrayAcarreo.length}
              ></GraficasArea>
              <GraficasArea
                titulo={"Trituradas"}
                data={arrayTrituradas}
                long={arrayTrituradas.length}
              ></GraficasArea>
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
}
export default HistorialBascula;
