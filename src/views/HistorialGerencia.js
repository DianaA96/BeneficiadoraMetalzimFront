import React, { useState, useEffect } from "react";
import GraficasArea from "../components/GraficasArea";
import HeaderDiseno from "../components/HeaderDiseno";
import ListaReportes from "../components/ListaReportes";
import GraficasLine from "../components/GraficasLine";
import Menu from "../components/Menu";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function HistorialGerencia({ rol }) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const reportes = [];

  const columns = React.useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 80 },
    { field: "fecha", headerName: "Fecha", flex: 1, maxWidth: 120 },
    { field: "cu", headerName: "Conc. Cu", flex: 1, maxWidth: 80 },
    { field: "zn", headerName: "Conc. Zn", flex: 1, maxWidth: 80 },
    {
      field: "liquidacion",
      headerName: "Liquidación Total Hoy (USD)",
      flex: 1,
      minWidth: 100,
      type: "number",
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
      cellClassName: "font-tabular-nums",
    },
    {
      field: "valor",
      headerName: "Valor del mineral Hoy (USD)",
      flex: 1,
      minWidth: 100,
      type: "number",
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
      cellClassName: "font-tabular-nums",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 100,
      getActions: (params) => [
        <Link
          className="btn-lista"
          to={`/reporte/${params.id}`}
          target="_blank"
        >
          Ver
        </Link>,
      ],
    },
  ]);

  const [dataGraficas, setDataGraficas] = useState([]);
  const [precioValor, setPrecioValor] = useState([]);
  const [status, setStatus] = useState("idle");
  const [statusTable, setStatusTable] = useState("idle");
  const [error, setError] = useState(null);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3050/gerente/reporteTable`)
      .then((result) => {
        setDataTable(result.data);
        setStatusTable("resolved");
      })
      // Aquí van las demás solicitudes
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    setStatus("loading");
    axios.get(`http://localhost:3050/gerente/grapHistoricas`)
    .then((result) => {
      setDataGraficas(result.data);
    });
    axios
      .get(`http://localhost:3050/gerente/grapLiquidacion`)
      .then((result) => {
        setPrecioValor(result.data);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, []);





  if (status === "error") {
    return (
      // NO RESPONDE EL BACK 404
      <Navigate to="/Error404" replace={true} />
    );
  }
  if (status == "resolved" && statusTable == "resolved") {
    console.log(dataTable)
    console.log("dataGraficas", dataGraficas);
    console.log("precioValor", precioValor);

    // Variable para saber la cantidad de registros(meses) que tiene concentrados
    let myConcentrado = Object.keys(dataGraficas.concentrados);
    let myPrecio = Object.keys(precioValor.metales);
    let myValor = Object.keys(precioValor.valor);

    // Variable para calcular la suma total por mes de Valor de mineral
    var totalValor = 0;

    // Arreglo para conocer la información de cada mes en el Objeto concentrados de la consulta
    var mes = [];

    // Arreglo para formatear la información de la consulta de concentrados
    var arrayConcentrado = [];
    var arrayPrecio = [];
    var arrayValor = [];

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
      arrConc = []; // Limpiando la variable arrConc para la siguiente iteración
    }
    console.log("arrayConcentrado", arrayConcentrado);

    for (var i = 0; i < myPrecio.length; i++) {
      // Convierte a número el mes de los registros de la consulta
      mes = Math.floor(myPrecio[i]);

      // Arreglo que para agregar los valores uno por uno para formatear la información
      var valorPrecio = [];

      // Variable que guarda los registros por mes que regresa la consulta. Es un arreglo
      var arrPecio = precioValor.metales[mes];

      // Casos para agregar el mes que viene en la consulta valorPrecio
      // Los números de los casos corresponden a cada mes, del 1 al 12
      switch (mes) {
        case 1:
          valorPrecio.push("Enero");
          break;
        case 2:
          valorPrecio.push("Febrero");
          break;
        case 3:
          valorPrecio.push("Marzo");
          break;
        case 4:
          valorPrecio.push("Abril");
          break;
        case 5:
          valorPrecio.push("Mayo");
          break;
        case 6:
          valorPrecio.push("Junio");
          break;
        case 7:
          valorPrecio.push("Julio");
          break;
        case 8:
          valorPrecio.push("Agosto");
          break;
        case 9:
          valorPrecio.push("Septiembre");
          break;
        case 10:
          valorPrecio.push("Octubre");
          break;
        case 11:
          valorPrecio.push("Noviembre");
          break;
        case 12:
          valorPrecio.push("Diciembre");
          break;
        default:
          console.log(`Lo siento, ${mes} no corresponde a ningún mes.`);
      }
      // For para iterar los datos de arrPecio y poder agregar uno por uno al arreglo final arrayPrecio
      for (var x = 0; x < arrPecio.length; x++) {
        valorPrecio.push(arrPecio[x]);
      }
      arrayPrecio.push(valorPrecio);
      arrPecio = []; // Limpiando la variable arrPecio para la siguiente iteración
    }
    console.log("arrayPrecio", arrayPrecio);

    // For para iterar los registros que vienen en la consulta del objeto Valor
    for (var i = 0; i < myValor.length; i++) {
      // Convierte a número el mes de los registros de la consulta
      mes = Math.floor(myValor[i]);
      // Función que hace la suma de las cantidades de los registros por mes
      // Regresa un número entero, correspondiente a la cantidad de valor total por cada mes
      precioValor.valor[mes].forEach(function (a) {
        totalValor += a;
      });
      // Casos para agregar un nuevo arreglo en el fromato ["mes", cantidad] al arreglo final arrayAcarreo
      // Los números de los casos corresponden a cada mes, del 1 al 12
      switch (mes) {
        case 1:
          arrayValor.push(["Enero", totalValor]);
          break;
        case 2:
          arrayValor.push(["Febrero", totalValor]);
          break;
        case 3:
          arrayValor.push(["Marzo", totalValor]);
          break;
        case 4:
          arrayValor.push(["Abril", totalValor]);
          break;
        case 5:
          arrayValor.push(["Mayo", totalValor]);
          break;
        case 6:
          arrayValor.push(["Junio", totalValor]);
          break;
        case 7:
          arrayValor.push(["Julio", totalValor]);
          break;
        case 8:
          arrayValor.push(["Agosto", totalValor]);
          break;
        case 9:
          arrayValor.push(["Septiembre", totalValor]);
          break;
        case 10:
          arrayValor.push(["Octubre", totalValor]);
          break;
        case 11:
          arrayValor.push(["Noviembre", totalValor]);
          break;
        case 12:
          arrayValor.push(["Diciembre", totalValor]);
          break;
        default:
          console.log(`Lo siento, ${mes} no corresponde a ningún mes.`);
      }
      totalValor = 0; // Limpiando la variable totalValor para la siguiente iteración
    }
    console.log("arrayValor", arrayValor);

    return (
      <>
        <body>
          <HeaderDiseno
            titulo={"Historial - Reporte gerencial"}
            subtitulo={
              "Consulta el historial de los reportes gerenciales generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
            }
            isDate={false}
          />
          <ListaReportes
            columns={columns}
            data={dataTable}
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
              titulo={"Recuperación de minerales"}
              descripcion={"en toneladas"}
              data={arrayConcentrado}
              long={arrayConcentrado.length}
            ></GraficasLine>
            <GraficasLine
              titulo="Precios de los metales"
              descripcion="(USD)"
              data={arrayPrecio}
              long={arrayPrecio.length}
            ></GraficasLine>

            <GraficasArea
              titulo={"Valor del mineral (USD)"}
              descripcion={"en toneladas"}
              data={arrayValor}
              long={arrayValor.length}
            ></GraficasArea>
          </div>
        </body>
        <footer>
          {
            /**Menu Admin */
            rol == "admin" ? (
              <Menu rol="admin" activeTab="summarize" landing="/admin"></Menu>
            ) : null
          }
          {
            /**Menu Gerente */
            rol == "gerente" ? (
              <Menu
                rol="gerente"
                activeTab="summarize"
                landing="/gerencia"
              ></Menu>
            ) : null
          }
        </footer>
      </>
    );
  }
}

export default HistorialGerencia;
