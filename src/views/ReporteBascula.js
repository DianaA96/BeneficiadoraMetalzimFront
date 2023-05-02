import React, { useState } from "react";
import Tabla from "../components/TablaBascula";
import "../styles/ReporteBascula.css";
import HeaderDiseno from "../components/HeaderDiseno";
import GraficasPie from "../components/GraficasPie";
import GraficasColumna from "../components/GraficasColumna";
import Menu from "../components/Menu";

const ReporteBascula = () => {

    //quitar y cambiar por el fetch
    const getTableData = () => {
        return [
            { id: 1, col0: "Minesites", col1: "Value1", col2: "Value2", col3: "Value3", col4: "Value4", col5:"Estancia inicial"},
            { id: 2, col0: "Guadalupe", col1: "Value5", col2: "Value6", col3: "Value7", col4: "Value8", col5:"Acarreo"},
            { id: 3, col0: "Balcones", col1: "Value9", col2: "Value10", col3: "Value11", col4: "Value12", col5:"Trituradas"},
            { id: 4, col0: "Total", col1: "Value13", col2: "Value14", col3: "Value15", col4: "Value16", col5:"Estancia patios"}
        ];
    };
    const getTableDataC = () => {
        return [
            { id: 1, col0: "Minesites", col1: "Value1", col2: "Value2", col3: "Value3", col4: "Value4", col5:"Ag"},
            { id: 2, col0: "Guadalupe", col1: "Value5", col2: "Value6", col3: "Value7", col4: "Value8", col5:"Pb"},
            { id: 3, col0: "Balcones", col1: "Value9", col2: "Value10", col3: "Value11", col4: "Value12", col5:"Zn"},
            { id: 4, col0: "Total", col1: "Value13", col2: "Value14", col3: "Value15", col4: "Value16", col5:"Cu"}
        ];
    };
    const getDataPie = () => {
        return [
            {id: 1, titulo: "Existencia inicial", descrip: "Toneladas"},
            {id: 2, op: "Minesites", cant: 11},
            {id: 3, op: "Balcones", cant: 5},
            {id: 3, op: "Guadalupe", cant: 2}
        ];
    };

    const [tableData, setTableData] = useState(getTableData());
    const [tableDataConc, setTableDataConc] = useState(getTableDataC());
    const [dataPie, setDataPie] = useState(getDataPie());

    return (
        <><body className="mybody">
            <HeaderDiseno titulo={"Reporte diario Movimiento de mineral Báscula"} subtitulo={"24 de abril de 2023"} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="mycard">
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Tabla tableData={tableData} />
                    </div >
                    <div>
                            <p className="titulo">Existencia inicial</p>
                            <p className="titulo">Acarreo</p>
                            <p className="titulo">Trituradas</p>
                            <p className="titulo">Existencia patios</p>
                        </div>
                    <div className="contentPie">
                        
                            
                            <GraficasPie tituloG={"Existencia inicial"} data={dataPie} />
                            <GraficasPie tituloG={"Acarreo"} />
                            <GraficasPie tituloG={"Trituradas"} />
                            <GraficasPie tituloG={"Existencia patios"} />
                    </div>
                    <div style={{ width:"80%"}}>
                        <p className='myP'>Embarque de concentrados</p>
                        <hr className='myhr' />
                    </div>
                    <div className="embarques">
                        <GraficasColumna />
                        <Tabla tableData={tableDataConc} />
                    </div>
                    
                    
                </div>
            </div>
        </body>
        <footer>
            <Menu rol={"admin"} activeTab="scale" landing="/laboratorio"/>
        </footer></>
    );
};

export default ReporteBascula;