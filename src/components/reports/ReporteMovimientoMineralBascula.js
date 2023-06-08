import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View, Font } from '@react-pdf/renderer';
import logo from "../../assets/Logo/LogoPDF.png"
import RobotoSlab from '../../assets/Fonts/RobotoSlab-VariableFont_wght.ttf';
import AcarreoPie from "../../assets/TempCharts/AcarreoPie.png";
import EmbarqueColumnas from "../../assets/TempCharts/EmbarqueColumnas.png";
import ExistenciaInicialPie from "../../assets/TempCharts/ExistenciaInicialPie.png";
import ExistenciaPatiosPie from "../../assets/TempCharts/ExistenciaPatiosPie.png";
import TrituradasPie from "../../assets/TempCharts/TrituradasPie.png";
import moment from 'moment/moment';

Font.register({ family: 'Roboto Slab', src: RobotoSlab });

const styles = StyleSheet.create({
    page: {
        fontFamily: "Roboto Slab",
        textTransform: "uppercase",
        fontSize: 8,
        paddingTop: "17px",
        paddingLeft:30,
        paddingRight:30,
        lineHeight: 1.5,
    }, 
    contenedorLogo: {
        justifyContent: "center",
        paddingLeft: "30px",
        paddingRight: "30px"
    },
    contenidoReporte: {
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        width: 120,
        height: 40,
    },
    headerReporte: {
        display: "flex",
        flexDirection: "row",
        height: "60px",
        width: "auto"
    },
    tituloReporte: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "80px",
        paddingRight: "100px",
        textTransform: "uppercase",
    },
    fechaContainer:{
        alignItems: "center",
        alignContent: "center",
        paddingLeft: "55px",
        justifyContent: "center",
    },
    fechaTabla: {
        display: "flex",
        flexDirection: "row",
    },
    headerTablaFecha: {
        textAlign: "center",
        padding: "5px",
        border: "2px solid #000",
        backgroundColor: "#ddd"
    },
    contenidoTablaFecha: {
        textAlign: "center",
        padding: "5px",
        border: "2px solid #000",
    },
    tablaReporte: {
        marginTop: "5px",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    headerTabla1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"
    },
    headerTabla2: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla3: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla4: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla5: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"
    },
    headerMina: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    headerMina1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"
    },
    headerMina2: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina3: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina4: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina5: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee",
        wordBreak: "break-word",
    },
    headerMina6: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee",
        wordBreak: "break-word",
    },
    headerMina7: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"
    },
    headerMina8: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"
    },
    headerMina9: {
        width: "90px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"
    },
    contentMina1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    contentMina2: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina3: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina4: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina5: {
        width: "230px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff",
        wordBreak: "break-word",
    },
    contentMina6: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff",
        wordBreak: "break-word",
    },
    contentMina7: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    contentMina8: {
        width: "75px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    contentMina9: {
        width: "90px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    tituloEmbarquesConc: {
        marginTop: "20px",
        alignContent: "center",
        textAlign: "center"
    },
    tituloEmbarquesConc_1: {
        width: "500px",
        marginTop: "20px",
        alignContent: "center",
        textAlign: "center"
    },
    headerConc2: {
        width: "170px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerConc3: {
        width: "155px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerConc4: {
        width: "150px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerConc5: {
        width: "165px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee",
        wordBreak: "break-word",
    },
    graficasPie: {
        height: "200px",
        width: "170px",
        padding: "20px"
    },
    tiraGraficos: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    contentMina2_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina3_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina4_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    contentMina5_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    headerTabla2_1: {
        width: "100px",
        border: "0px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla3_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla4_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla5_1: {
        width: "100px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"
    },
    columnas: {
        padding: "10px",
        display: "flex",
        flexDirection: "row"
    },
    graficosColumna : {
        height: "218px",
        width: "218px",
    },
    embarque: {
        display: "flex",
        flexDirection: "row"
    }
  });

  const ReporteMovimientoMineralBasculaPDF = (props) => (
    <Document>
        <Page size="Letter" orientation="landscape" style={styles.page}>
            <View style={styles.contenidoReporte}>
                <View style={styles.headerReporte}>
                    <View style={styles.contenedorLogo}>
                        <Image style={styles.logo} src={logo} />
                    </View>
                    <View style={styles.tituloReporte}>
                        <Text>{"Reporte de movimiento de mineral en báscula"}</Text>
                        <Text>{"Versión para impresión"}</Text>
                    </View>
                    <View style={styles.fechaContainer}>
                        <View style={styles.fechaTabla}>
                            <View style={styles.headerTablaFecha}>
                                <Text>{"FECHA"}</Text>
                            </View>
                            <View style={styles.contenidoTablaFecha}>
                                <Text>{moment().format("DD-MM-YYYY")}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
            <View style={styles.tablaReporte}>
                <View style={styles.header}>
                    <View style={styles.headerTabla1}>
                        <Text>{"."}</Text>
                    </View>
                    <View style={styles.headerTabla2}>
                        <Text>{"Existencia inicial"}</Text>
                        <Text>{"ton"}</Text>
                    </View>
                    <View style={styles.headerTabla3}>
                        <Text>{"Acarreo"}</Text>
                        <Text>{"ton"}</Text>
                    </View>
                    <View style={styles.headerTabla4}>
                        <Text>{"Trituradas"}</Text>
                        <Text>{"ton"}</Text>
                    </View>
                    <View style={styles.headerTabla5}>
                        <Text>{"Existencia patios"}</Text>
                        <Text>{"ton"}</Text>
                    </View>
                </View>

                <View style={styles.headerMina}>
                    <View style={styles.headerMina1}>
                        <Text>{"Minesites"}</Text>
                    </View>
                    <View style={styles.contentMina2}>
                        <Text>{props.tableData[0].col1}</Text>
                    </View>
                    <View style={styles.contentMina3}>
                        <Text>{props.tableData[0].col2}</Text>
                    </View>
                    <View style={styles.contentMina4}>
                        <Text>{props.tableData[0].col3}</Text>
                    </View>
                    <View style={styles.contentMina5}>
                        <Text>{props.tableData[0].col4}</Text>
                    </View>
                </View>

                <View style={styles.headerMina}>
                    <View style={styles.headerMina1}>
                        <Text>{"Guadalupe"}</Text>
                    </View>
                    <View style={styles.contentMina2}>
                        <Text>{props.tableData[1].col1}</Text>
                    </View>
                    <View style={styles.contentMina3}>
                        <Text>{props.tableData[1].col2}</Text>
                    </View>
                    <View style={styles.contentMina4}>
                        <Text>{props.tableData[1].col3}</Text>
                    </View>
                    <View style={styles.contentMina5}>
                        <Text>{props.tableData[1].col4}</Text>
                    </View>
                </View>

                <View style={styles.headerMina}>
                    <View style={styles.headerMina1}>
                        <Text>{"Balcones"}</Text>
                    </View>
                    <View style={styles.contentMina2}>
                        <Text>{props.tableData[2].col1}</Text>
                    </View>
                    <View style={styles.contentMina3}>
                        <Text>{props.tableData[2].col2}</Text>
                    </View>
                    <View style={styles.contentMina4}>
                        <Text>{props.tableData[2].col3}</Text>
                    </View>
                    <View style={styles.contentMina5}>
                        <Text>{props.tableData[2].col4}</Text>
                    </View>
                </View>

                <View style={styles.headerMina}>
                    <View style={styles.headerMina1}>
                        <Text>{"TOTAL"}</Text>
                    </View>
                    <View style={styles.contentMina2}>
                        <Text>{props.tableData[3].col1}</Text>
                    </View>
                    <View style={styles.contentMina3}>
                        <Text>{props.tableData[3].col2}</Text>
                    </View>
                    <View style={styles.contentMina4}>
                        <Text>{props.tableData[3].col3}</Text>
                    </View>
                    <View style={styles.contentMina5}>
                        <Text>{props.tableData[3].col4}</Text>
                    </View>
                </View>

                <View style={styles.tiraGraficos}>
                    <Image src={AcarreoPie} style={styles.graficasPie}></Image>
                    <Image src={ExistenciaInicialPie} style={styles.graficasPie}></Image>
                    <Image src={ExistenciaPatiosPie} style={styles.graficasPie}></Image>
                    <Image src={TrituradasPie} style={styles.graficasPie}></Image>
                </View>

                <View style={styles.embarque}>

                    <View >
                        <View>
                        <Text style={styles.tituloEmbarquesConc_1}>{"Embarque de concentrados"}</Text>
                        </View>

                        <View style={styles.header}>
                            <View style={styles.headerTabla1}>
                                <Text>{"."}</Text>
                            </View>
                            <View style={styles.headerTabla3_1}>
                                <Text>{"Pb"}</Text>
                                <Text>{"ton"}</Text>
                            </View>
                            <View style={styles.headerTabla3_1}>
                                <Text>{"Cu"}</Text>
                                <Text>{"ton"}</Text>
                            </View>
                            <View style={styles.headerTabla4_1}>
                                <Text>{"Zn"}</Text>
                                <Text>{"ton"}</Text>
                            </View>
                            <View style={styles.headerTabla5_1}>
                                <Text>{"Au/Ag"}</Text>
                                <Text>{"ton"}</Text>
                            </View>
                        </View>

                        <View style={styles.headerMina}>
                            <View style={styles.headerMina1}>
                                <Text>{"Minesites"}</Text>
                            </View>
                            <View style={styles.contentMina2_1}>
                                <Text>{props.tableDataConc[0].col1}</Text>
                            </View>
                            <View style={styles.contentMina3_1}>
                                <Text>{props.tableDataConc[0].col2}</Text>
                            </View>
                            <View style={styles.contentMina4_1}>
                                <Text>{props.tableDataConc[0].col3}</Text>
                            </View>
                            <View style={styles.contentMina5_1}>
                                <Text>{props.tableDataConc[0].col4}</Text>
                            </View>
                        </View>

                        <View style={styles.headerMina}>
                            <View style={styles.headerMina1}>
                                <Text>{"Guadalupe"}</Text>
                            </View>
                            <View style={styles.contentMina2_1}>
                                <Text>{props.tableDataConc[1].col1}</Text>
                            </View>
                            <View style={styles.contentMina3_1}>
                                <Text>{props.tableDataConc[1].col2}</Text>
                            </View>
                            <View style={styles.contentMina4_1}>
                                <Text>{props.tableDataConc[1].col3}</Text>
                            </View>
                            <View style={styles.contentMina5_1}>
                                <Text>{props.tableDataConc[1].col4}</Text>
                            </View>
                        </View>

                        <View style={styles.headerMina}>
                            <View style={styles.headerMina1}>
                                <Text>{"Balcones"}</Text>
                            </View>
                            <View style={styles.contentMina2_1}>
                                <Text>{props.tableDataConc[2].col1}</Text>
                            </View>
                            <View style={styles.contentMina3_1}>
                                <Text>{props.tableDataConc[2].col2}</Text>
                            </View>
                            <View style={styles.contentMina4_1}>
                                <Text>{props.tableDataConc[2].col3}</Text>
                            </View>
                            <View style={styles.contentMina5_1}>
                                <Text>{props.tableDataConc[2].col4}</Text>
                            </View>
                        </View>

                        <View style={styles.headerMina}>
                            <View style={styles.headerMina1}>
                                <Text>{"Jales"}</Text>
                            </View>
                            <View style={styles.contentMina2_1}>
                                <Text>{props.tableDataConc[3].col1}</Text>
                            </View>
                            <View style={styles.contentMina3_1}>
                                <Text>{props.tableDataConc[3].col2}</Text>
                            </View>
                            <View style={styles.contentMina4_1}>
                                <Text>{props.tableDataConc[3].col3}</Text>
                            </View>
                            <View style={styles.contentMina5_1}>
                                <Text>{props.tableDataConc[3].col4}</Text>
                            </View>
                        </View>

                        <View style={styles.headerMina}>
                            <View style={styles.headerMina1}>
                                <Text>{"TOTAL"}</Text>
                            </View>
                            <View style={styles.contentMina2_1}>
                                <Text>{props.tableDataConc[4].col1}</Text>
                            </View>
                            <View style={styles.contentMina3_1}>
                                <Text>{props.tableDataConc[4].col2}</Text>
                            </View>
                            <View style={styles.contentMina4_1}>
                                <Text>{props.tableDataConc[4].col3}</Text>
                            </View>
                            <View style={styles.contentMina5_1}>
                                <Text>{props.tableDataConc[4].col4}</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.columnas}>
                        <Image src={EmbarqueColumnas} style={styles.graficosColumna}></Image>
                        </View>
                    </View>
                </View>
            </View>               
            </View>
        </Page>
    </Document>
);

export default ReporteMovimientoMineralBasculaPDF