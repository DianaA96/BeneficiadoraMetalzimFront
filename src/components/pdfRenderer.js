import React, { useEffect, useState } from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import ReporteMovimientoBasculaPDF from './reports/ReporteMovimientoBasculaPDF';
import ReporteMovimientoMineralBascula from './reports/ReporteMovimientoMineralBascula';
import axios from 'axios';

import '../App.css';
import moment from 'moment/moment';

const width = window.innerWidth; 
const height = window.innerHeight; 

function PdfRenderer () {
  let fecha = moment("YYYY-MM-DD")
  const [tableData, setTableData] = useState([]);
  const [tableDataConc, setTableDataConc] = useState([]);

  const [statusMineral, setStatusMineral] = useState("idle");
  const [statusEmbarque, setStatusEmbarque] = useState("idle");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

useEffect( () => {
  setStatus("loading");
  // Primera solicitud GET
  axios
    .get(`https://metalzim-webapp.azurewebsites.net/gerente/movMineral?fecha=${fecha}`)
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
    .get(`https://metalzim-webapp.azurewebsites.net/gerente/embarque?fecha=${fecha}`)
    .then((result) => {
      setTableDataConc(result.data);
      setStatusEmbarque("resolved");
    })
    .catch((error) => {
      setError(error);
      setStatusEmbarque("error");
    });

}, [status]) 
    return (
        <div>
          {setTimeout(() => {console.log("Loading. Please be patient.")}, "3000")}
            {statusMineral == "resolved" && statusEmbarque == "resolved" ? <PDFViewer width={width} height={height} className="app" >
                <ReporteMovimientoMineralBascula tableData={tableData} tableDataConc={tableDataConc}/>
            </PDFViewer>:null}
        </div>
    );
}

export default PdfRenderer;