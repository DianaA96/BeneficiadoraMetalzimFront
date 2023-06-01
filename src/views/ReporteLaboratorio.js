import React, { useState, useEffect} from "react";
import TablaLaboratorio from "../components/TablaLaboratorio";
import "../styles/analisisLab.css";
import HeaderDiseno from "../components/HeaderDiseno";
import Menu from "../components/Menu";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const ReporteLaboratorio = () => {
    const [analisisData, setAnalisisData] = useState(null)
    const [status, setStatus] = useState({})
    const [error, setError] = useState({})
    let { mina, fecha } = useParams();
    useEffect(()=>{
        setStatus('loading')
        
        axios.get(`http://localhost:3050/lab/labTable?mina=${mina}&planta=planta 1&fecha=${fecha}`)
          .then((result)=>{
            setStatus('resolved')
            setAnalisisData(result.data)
            setTableValues(result.data.report[1], setTurno1Data)
            setTableValues(result.data.report[2], setTurno2Data)
            setTableValues(result.data.report[3], setTurno3Data)
          })
          .catch((error)=>{
            alert(error)
            setError(error)
            setStatus('error')
          })
        }, []);


    //quitar y cambiar por el fetch
    const getTableData = () => {
        return [
            { id: 1, concentrado: "Cabeza", Ag: "0", Pb: "0", Zn: "0", Cu: "0", Fe: "0", Sb: "0", As: "0" },
            { id: 2, concentrado: "Conc. Cu", Ag: "0", Pb: "0", Zn: "0", Cu: "0", Fe: "0", Sb: "0", As: "0" },
            { id: 3, concentrado: "Conc. Zn", Ag: "0", Pb: "0", Zn: "0", Cu: "0", Fe: "0", Sb: "0", As: "0" },
            { id: 4, concentrado: "Colas", Ag: "0", Pb: "0", Zn: "0", Cu: "0", Fe: "0", Sb: "0", As: "0" }
        ];
    };

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

    const [tableData, setTableData] = useState(getTableData());
    const [turno1Data, setTurno1Data] = useState([]);
    const [turno2Data, setTurno2Data] = useState([]);
    const [turno3Data, setTurno3Data] = useState([]);
    

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
    };

    

    return (
        <>
            <body style={{ backgroundColor: "#F8F8F8" }}>
                <HeaderDiseno
                titulo={"Reporte de laboratorio"}
                subtitulo={analisisData ? `${analisisData.head.mina} | ${analisisData.head.planta}` : "Cargando"}
                isDate={true}
                />
                <div className="header-reporte">
                    <Link to='/historial-analisis'>
                        <button className='btn-lista' style={{width: "12rem"}}>Ir al historial</button>
                    </Link>
                </div>
                
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                    <div className="card">
                        <TablaLaboratorio tableData={turno1Data ? turno1Data : null} copyTableData={copyTableData(turno1Data)} turno="Primer Turno"/>
                        <TablaLaboratorio tableData={turno2Data ? turno2Data : null} copyTableData={copyTableData(turno2Data)} turno="Segundo Turno"/>
                        <TablaLaboratorio tableData={turno3Data ? turno3Data : null} copyTableData={copyTableData(turno3Data)} turno="Tercer Turno"/>
                    </div>
                    
                </div>
                <footer style={{height:'10rem'}}></footer>
            </body>
            
            
            <Menu rol={"laboratorista"} landing="/laboratorio" activeTab='history'/>
        </>
    );
};

export default ReporteLaboratorio;