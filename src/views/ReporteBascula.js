import React, { useState } from "react";
import Tabla from "../components/TablaBascula";
import "../styles/ReporteBascula.css";
import HeaderDiseno from "../components/HeaderDiseno";
import GraficasPie from "../components/GraficasPie";
import GraficasColumna from "../components/GraficasColumna";

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

    const [tableData, setTableData] = useState(getTableData());
    const [tableDataConc, setTableDataConc] = useState(getTableDataC());

    return (
        <body className="mybody">
            <HeaderDiseno titulo={"Reporte diario Movimiento de mineral Báscula"} subtitulo={"24 de abril de 2023"} />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className="mycard">
                    <Tabla tableData={tableData} />
                    <div className="containerGraficas">
                        <div className="graficaPie">
                            <p className="titulo">Existencia inicial</p>
                            <GraficasPie tituloG={"Existencia inicial"}/>
                        </div>
                        <div className="graficaPie">
                            <p className="titulo">Acarreo</p>
                            <GraficasPie tituloG={"Acarreo"}/>
                        </div>
                        <div className="graficaPie">
                            <p className="titulo">Trituradas</p>
                            <GraficasPie tituloG={"Trituradas"}/>   
                        </div>
                        <div className="graficaPie">
                            <p className="titulo">Existencia patios</p>
                            <GraficasPie tituloG={"Existencia patios"}/>
                        </div>
                    </div>
                    <div className="division">
                        <p style={{color:"#EF7B30", fontWeight:"bold", fontSize:"1.5rem"}}>Embarque de concentrados</p>
                        <hr className="myhr"/>
                    </div>
                    <div className="embarques">
                        <GraficasColumna/>
                        <Tabla tableData={tableDataConc} />
                    </div>
                    
                </div>
                
            </div>
            
        </body>
    );
};

export default ReporteBascula;