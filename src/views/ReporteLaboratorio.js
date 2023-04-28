import React, { useState } from "react";
import TablaLaboratorio from "../components/tablaLaboratorio";
import "../styles/analisisLab.css";
import HeaderDiseno from "../components/HeaderDiseno";
import Menu from "../components/Menu";

const ReporteLaboratorio = () => {

    //quitar y cambiar por el fetch
    const getTableData = () => {
        return [
            { id: 1, col0: "Cabeza", col1: "Value1", col2: "Value2", col3: "Value3", col4: "Value4", col5: "Value5", col6: "Value6", col7: "Value7" },
            { id: 2, col0: "Conc. Plomo", col1: "Value8", col2: "Value9", col3: "Value10", col4: "Value11", col5: "Value12", col6: "Value13", col7: "Value14" },
            { id: 3, col0: "Conc. Zinc", col1: "Value15", col2: "Value16", col3: "Value17", col4: "Value18", col5: "Value19", col6: "Value20", col7: "Value21" },
            { id: 4, col0: "Colas", col1: "Value22", col2: "Value23", col3: "Value24", col4: "Value25", col5: "Value26", col6: "Value27", col7: "Value28" }
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
        <><body style={{ backgroundColor: "#F8F8F8" }}>
            <HeaderDiseno titulo={"Reporte de laboratorio"} subtitulo={""} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="card">
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} />
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} />
                    <TablaLaboratorio tableData={tableData} copyTableData={copyTableData} />
                </div>
            </div>
        </body>
        <footer>
            <Menu rol={"laboratorista"} landing="/laboratorio"/>
        </footer></>
    );
};

export default ReporteLaboratorio;