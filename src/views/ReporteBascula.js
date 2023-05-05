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
            { id: 1, col0: "Minesites", col1: "1.523", col2: "4.336", col3: "6.354", col4: "5.214", col5:"Estancia inicial"},
            { id: 2, col0: "Guadalupe", col1: "3.269", col2: "6.215", col3: "5.268", col4: "1.258", col5:"Acarreo"},
            { id: 3, col0: "Balcones", col1: "5.288", col2: "2.154", col3: "9.584", col4: "4.685", col5:"Trituradas"},
            { id: 4, col0: "Total", col1: "10.256", col2: "13.245", col3: "23.584", col4: "11.623", col5:"Estancia patios"}
        ];
    };
    const getTableDataC = () => {
        return [
            { id: 1, col0: "Minesites", col1: "15.23", col2: "84.57", col3: "95.64", col4: "75.25", col5:"Ag"},
            { id: 2, col0: "Guadalupe", col1: "36.25", col2: "32.45", col3: "64.35", col4: "13.25", col5:"Pb"},
            { id: 3, col0: "Balcones", col1: "32.15", col2: "32.54", col3: "78.52", col4: "45.68", col5:"Zn"},
            { id: 4, col0: "Total", col1: "102.32", col2: "213.56", col3: "320.52", col4: "360.54", col5:"Cu"}
        ];
    };
    const getDataPieExisIn = () => {
        return [
            ["Minesites", 11],
            ["Balcones", 5],
            ["Guadalupe", 2],
        ];
    };
    const getDataPieAcarreo = () => {
        return [
            ["Minesites", 11],
            ["Balcones", 5],
            ["Guadalupe", 2],
        ];
    };
    const getDataPieTritu = () => {
        return [
            ["Minesites", 11],
            ["Balcones", 5],
            ["Guadalupe", 2],
        ];
    };

    const getDataPieExisPat = () => {
        return [
            ["Minesites", 11],
            ["Balcones", 5],
            ["Guadalupe", 2],
        ];
    };

    const [tableData, setTableData] = useState(getTableData());
    const [tableDataConc, setTableDataConc] = useState(getTableDataC());
    const [dataPieExisIn, setDataPieExisIn] = useState(getDataPieExisIn());
    const [dataPieAcarreo, setDataPieAcarreo] = useState(getDataPieAcarreo());
    const [dataPieTritu, setDataPieTritu] = useState(getDataPieTritu());
    const [dataPieExisPat, setDataPieExistPat] = useState(getDataPieExisPat());

    return (
        <><body className="mybody">
            <HeaderDiseno
            titulo={"Reporte diario Movimiento de mineral Báscula"}
            subtitulo={""}
            isDate={true}
            />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="mycard">
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Tabla tableData={tableData} />
                    </div >

                    <div className="contentPie">
                        <div>
                            <GraficasPie tituloG={"Existencia inicial"} data={dataPieExisIn} />
                        </div>
                        <div>
                            <GraficasPie tituloG={"Acarreo"} data={dataPieAcarreo}/>
                        </div>
                        <div>
                            <GraficasPie tituloG={"Trituradas"} data={dataPieTritu}/>
                        </div>
                        <div>
                            <GraficasPie tituloG={"Existencia patios"} data={dataPieExisPat}/>
                        </div>
                    </div>

                    <div className='division'>
                        <p className='myP'>Embarque de concentrados</p>
                        <hr className='myhr' />
                    </div>

                    <div className="embarques">
                        <GraficasColumna />
                        <div style={{display:"flex", justifyContent:"center", height:"22rem"}}>
                            <Tabla tableData={tableDataConc} />
                        </div>
                    </div>
                    
                </div>
               
            </div>

            <div className='stripBotones' style={{marginBottom:"5rem", justifyContent:"center", display:"flex", width:"100%"}}>
                <button className='guardarProgreso' style={{width:"15rem", backgroundColor:"#817C7C"}}>Imprimir
                    <span className='separatorButton'/>
                    <span class="material-symbols-outlined">sync_saved_locally</span>
                </button>
                <button className='enviar' style={{width:"15rem", marginLeft:"5%"}}>Ir a historial
                </button>
            </div> 
            
        </body>
        <footer>
            <Menu rol={"admin"} activeTab="scale" landing="/admin"/>
        </footer></>
    );
};

export default ReporteBascula;