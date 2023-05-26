import React, { useState } from "react";
import TablaLaboratorio from "../components/tablaLaboratorio";
import "../styles/analisisLab.css";
import HeaderDiseno from "../components/HeaderDiseno";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
const ReporteLaboratorio = () => {

    //quitar y cambiar por el fetch
    const getTableData = () => {
        return [
            { id: 1, col0: "Cabeza", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 2, col0: "Conc. Plomo", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 3, col0: "Conc. Zinc", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 4, col0: "Colas", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" }
        ];
    };

    const [tableData, setTableData] = useState(getTableData());

    const copyTableData = () => {

        let dataString = "";
        tableData.forEach(row => {
            dataString += `${row.col1}\t${row.col2}\t${row.col3}\t${row.col4}\t${row.col5}\t${row.col6}\t${row.col7}\n`;
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
                subtitulo={"Mina Guadalupe | Planta 1"}
                isDate={true}
                />
                <div className="header-reporte">
                    <Link to='/historial-analisis'>
                        <button className='btn-lista' style={{width: "12rem"}}>Ir al historial</button>
                    </Link>
                </div>
                
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                    <div className="card">
                        <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno="Primer Turno"/>
                        <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno="Segundo Turno"/>
                        <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno="Tercer Turno"/>
                        
                    </div>
                    
                </div>
                <footer style={{height:'10rem'}}></footer>
            </body>
            
            
            <Menu rol={"laboratorista"} landing="/laboratorio" activeTab='history'/>
        </>
    );
};

export default ReporteLaboratorio;