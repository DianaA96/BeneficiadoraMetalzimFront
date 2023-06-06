import React, { useState, useEffect } from "react";
import "../styles/ModalReporteLaboratorio.css";
import HeaderSencillo from "./HeaderSencillo";
import TablaLaboratorio from "./TablaLaboratorio";
import "../styles/analisisLab.css"
import Tooltip from "../components/Tooltip";
import axios from "axios";

const ModalReporteLaboratorio = (props) => {
    const [analisisData, setAnalisisData] = useState(null)
    const [tooltipVisibility, setTooltipVisibility] = useState(false)
    const [turno1Data, setTurno1Data] = useState([]);
    const [turno2Data, setTurno2Data] = useState([]);
    const [turno3Data, setTurno3Data] = useState([]);
    const [status, setStatus] = useState({})
    const [error, setError] = useState({})

    useEffect(()=>{
        setStatus('loading')
        
        axios.get(`http://localhost:3050/lab/labTable?mina=${props.mina.value}&planta=planta 1&fecha=${props.fecha}`)
          .then((result)=>{
            setStatus('resolved')
            setAnalisisData(result.data)
            setTableValues(result.data.report[1], setTurno1Data)
            setTableValues(result.data.report[2], setTurno2Data)
            setTableValues(result.data.report[3], setTurno3Data)
          })
          .catch((error)=>{
            console.log(error)
            setError(error)
            setStatus('error')
          })
        }, []);

    var titulo = "Reporte de Laboratorio"
    var subtitulo = "Horem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    
    const setTableValues = (turnoData, setTableData) => {
        setTableData(
            [
                { id: 1, concentrado: "Cabeza", Ag: turnoData.Cabeza.Ag, Pb: turnoData.Cabeza.Pb, Zn: turnoData.Cabeza.Zn, Cu: turnoData.Cabeza.Cu, Fe: turnoData.Cabeza.Fe, Sb: turnoData.Cabeza.Sb, As: turnoData.Cabeza.As },
                { id: 2, concentrado: "Conc. Pb", Ag: turnoData.Pb.Ag, Pb: turnoData.Pb.Pb, Zn: turnoData.Pb.Zn, Cu: turnoData.Pb.Cu, Fe: turnoData.Pb.Fe ,Sb: turnoData.Pb.Sb, As: turnoData.Pb.As },
                { id: 3, concentrado: "Conc. Zn", Ag: turnoData.Zn.Ag, Pb: turnoData.Zn.Pb, Zn: turnoData.Zn.Zn, Cu: turnoData.Zn.Cu, Fe: turnoData.Zn.Fe, Sb: turnoData.Zn.Sb, As: turnoData.Zn.As },
                { id: 4, concentrado: "Colas", Ag: turnoData.Colas.Ag, Pb: turnoData.Colas.Pb, Zn: turnoData.Colas.Zn, Cu: turnoData.Colas.Cu, Fe: turnoData.Colas.Fe, Sb: turnoData.Colas.Sb, As: turnoData.Colas.As }
            ]
        )
    }


    const copyTableData = (turnoData) => {

        let dataString = "";
        turnoData.forEach(row => {
            dataString += `${row.Ag}\t${row.Pb}\t${row.Zn}\t${row.Cu}\t${row.Fe}\t${row.Sb}\t${row.As}\n`;
        });

        const textarea = document.createElement("textarea");
        textarea.value = dataString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showTooltip();
    };

    function showTooltip(){
        setTooltipVisibility(true)
        setTimeout(() => {
            setTooltipVisibility(false)
        }, 3500);
    }

    function hideModal(){
        props.setModalVisibility(false)
    }

    if(status === 'idle' || status === 'loading'){
        return (
          <div>Loading</div>//Cambiar por icono de loading
        )
    }
    
    
    if(status === 'error')
    {
        return (
            
            <div className="modal-overlay">
                <div className="modal">
                    <div className="top">
                        <button className="buttonClose" onClick={hideModal}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="content">
                        <div className="descripcion">
                            <h1>Reporte de Laboratorio</h1>
                            <h2>Error. Por favor seleccione una mina y fecha para mostrar los datos</h2>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    
      if (status == 'resolved') 
    {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="top">
                        <button className="buttonClose" onClick={hideModal}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="content">
                        <div className="descripcion">
                            <h1>Reporte de Laboratorio</h1>
                            <h3 className="n500">{`Mina ${props.mina.value} | ${props.fecha}`}</h3>
                            <p>Copia los valores de cada turno a partir de los botones.</p>
                        </div>
                        <TablaLaboratorio tableData={turno1Data ? turno1Data : null} copyTableData={()=>copyTableData(turno1Data)} turno={"Primer Turno"}/>
                        <TablaLaboratorio tableData={turno2Data ? turno2Data : null} copyTableData={()=>copyTableData(turno2Data)} turno="Segundo Turno"/>
                        <TablaLaboratorio tableData={turno3Data ? turno3Data : null} copyTableData={()=>copyTableData(turno3Data)} turno="Tercer Turno"/>
                    </div>
                    <Tooltip tooltipVisibility={tooltipVisibility}></Tooltip>
                </div>
                
            </div>
           
        );
    }

    
};

export default ModalReporteLaboratorio