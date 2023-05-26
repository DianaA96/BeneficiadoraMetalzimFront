import React, { useState } from "react";
import "../styles/ModalReporteLaboratorio.css";
import HeaderSencillo from "./HeaderSencillo";
import TablaLaboratorio from "./tablaLaboratorio";
import "../styles/analisisLab.css"

const ModalReporteLaboratorio = (props) => {

    var titulo = "Reporte de Laboratorio"
    var subtitulo = "Horem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

    //quitar y cambiar por el fetch
    const getTableData = () => {
        return [
            { id: 1, col0: "Cabeza", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 2, col0: "Conc. Plomo", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 3, col0: "Conc. Zinc", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" },
            { id: 4, col0: "Colas", col1: "0", col2: "0", col3: "0", col4: "0", col5: "0", col6: "0", col7: "0" }
        ];
    };
    //

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

    function hideModal(){
        props.setModalVisibility(false)
    }

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
                        <h3 className="n500">Mina Guadalupe | Miércoles, 13 de abril de 2023</h3>
                        <p>Copia los valores de cada turno a partir de los botones.</p>
                    </div>
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno={"Primer Turno"}/>
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno="Segundo Turno"/>
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} turno="Tercer Turno"/>
                </div>
            </div>
        </div>
       
    );
};

export default ModalReporteLaboratorio