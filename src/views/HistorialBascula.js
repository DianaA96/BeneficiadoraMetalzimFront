import React, { useState, useEffect } from "react";
import HeaderDiseno from "../components/HeaderDiseno";
import ListaReportes from "../components/ListaReportes";
import Menu from "../components/Menu";
import GraficasArea from "../components/GraficasArea";
import GraficasLine from "../components/GraficasLine";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
function HistorialBascula({ rol }) {
  const [dataAcarreo, setDataAcarreo] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);



  var check = 0;

  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3050/gerente/grapHistoricas`)
      .then((result) => {
        setDataAcarreo(result.data);
        setStatus("resolved");
      })
      // Aquí van las demás solicitudes
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [check]);

  
  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3050/gerente/movMineralTable`)
      .then((result) => {
        setHistorial(result.data);
        setStatus("resolved");
      })
      // Aquí van las demás solicitudes
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, []);

  console.log(historial)





  const columns = React.useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 80 },
    { field: "fecha", headerName: "Fecha", flex: 1, maxWidth: 120 },
    {
      field: "inicial",
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




  if (status === "error") {
    return (
      // NO RESPONDE EL BACK 404
      <Navigate to="/Error404" replace={true} />
    );
  }


  if (status == "resolved") {
   /* console.log("dataAcarreo", dataAcarreo);
    console.log("dataAcarreo", dataAcarreo.acarreo[0].totalAcarreo);

    var totalAcarreo = 0;
    var totalTritur = 0;
    var totalConc = 0;
    for(var i = 0; i < dataAcarreo.acarreo.length; i++) {
      totalAcarreo += dataAcarreo.acarreo[i].totalAcarreo
      totalTritur += dataAcarreo.trituradas[i].totalTrituradas
      totalConc += dataAcarreo.concentrados[i].totalConcentrados
    }
    */
    /*
    console.log("totalAcarreo", totalAcarreo)
    console.log("totalTritur", totalTritur)
    console.log("totalConc", totalConc)
    */
    const options = [
      { value: '2023', label: '2023' },
      { value: '2024', label: '2024' },
      { value: '2025', label: '2025' },
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
            data={historial}
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
                class="contGraficasPie"
              ></GraficasArea>
              <GraficasArea
                titulo={"Trituradas"}
                class="contGraficasPie"
              ></GraficasArea>
            </div>
            <GraficasLine titulo={"Concentrados"}></GraficasLine>
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
