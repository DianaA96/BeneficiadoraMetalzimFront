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

  const reportes = [
    {
      id: "RE01",
      fecha: "20/04/2023",
      concCu: 549,
      concZn: 345,
      liquidacionHoy: 203142,
      valorMineral: 747863.123,
    },
    {
      id: "RE02",
      fecha: "21/04/2023",
      concCu: 549,
      concZn: 24,
      liquidacionHoy: 94672,
      valorMineral: 124841,
    },
    {
      id: "RE03",
      fecha: "22/04/2023",
      concCu: 836,
      concZn: 235,
      liquidacionHoy: 957632,
      valorMineral: 657323.32,
    },
    {
      id: "RE04",
      fecha: "23/04/2023",
      concCu: 549,
      concZn: 345,
      liquidacionHoy: 17312,
      valorMineral: 747863.23,
    },
    {
      id: "RE05",
      fecha: "24/04/2023",
      concCu: 462,
      concZn: 153,
      liquidacionHoy: 27382,
      valorMineral: 956732,
    },
    {
      id: "RE06",
      fecha: "25/04/2023",
      concCu: 153,
      concZn: 51,
      liquidacionHoy: 518232,
      valorMineral: 34273.65,
    },
    {
      id: "RE07",
      fecha: "26/04/2023",
      concCu: 834,
      concZn: 845,
      liquidacionHoy: 58623,
      valorMineral: 9457361.12,
    },
  ];

  const columns = React.useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 80 },
    { field: "fecha", headerName: "Fecha", flex: 1, maxWidth: 120 },
    { field: "concCu", headerName: "Conc. Cu", flex: 1, maxWidth: 80 },
    { field: "concZn", headerName: "Conc. Zn", flex: 1, maxWidth: 80 },
    {
      field: "liquidacionHoy",
      headerName: "Liquidación Total Hoy (USD)",
      flex: 1,
      minWidth: 100,
      type: "number",
      valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
      cellClassName: "font-tabular-nums",
    },
    {
      field: "valorMineral",
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
            titulo={"Historial - Reporte gerencial"}
            subtitulo={
              "Consulta el historial de los reportes gerenciales generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
            }
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

            <GraficasLine
              titulo={"Recuperación de minerales"}
              descripcion={"en toneladas"}
              data={arrayConcentrado}
              long={arrayConcentrado.length}
            ></GraficasLine>
            <GraficasLine
              titulo="Precios de los metales"
              descripcion="(USD)"
              data={arrayConcentrado}
              long={arrayConcentrado.length}
            ></GraficasLine>
            {/*
            <GraficasArea
              titulo="Valor del mineral (USD)"
              class="contGraficas"
            ></GraficasArea>
            */}
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
