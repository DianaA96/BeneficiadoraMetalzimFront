import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View, Font } from '@react-pdf/renderer';
import logo from "../../assets/Logo/LogoPDF.png"
import RobotoSlab from '../../assets/Fonts/RobotoSlab-VariableFont_wght.ttf';

Font.register({ family: 'Roboto Slab', src: RobotoSlab });

const styles = StyleSheet.create({
    page: {
        fontFamily: "Roboto Slab",
        textTransform: "uppercase",
        fontSize: 8,
        paddingTop: "17px",
        paddingLeft:60,
        paddingRight:60,
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
        width: "70px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"
    },
    headerTabla2: {
        width: "90px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla3: {
        width: "160px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla4: {
        width: "300px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#ddd"

    },
    headerTabla5: {
        width: "90px",
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
        width: "70px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"
    },
    headerMina2: {
        width: "90px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina3: {
        width: "80px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina4: {
        width: "80px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#eee"

    },
    headerMina5: {
        width: "75px",
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
        width: "70px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"
    },
    contentMina2: {
        width: "90px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina3: {
        width: "80px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina4: {
        width: "80px",
        border: "2px solid #000",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#fff"

    },
    contentMina5: {
        width: "75px",
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
    }
  });
  
const ReporteMovimientoBasculaPDF = () => (
        <Document>
            <Page size="Letter" orientation="landscape" style={styles.page}>
                <View style={styles.contenidoReporte}>
                    <View style={styles.headerReporte}>
                        <View style={styles.contenedorLogo}>
                            <Image style={styles.logo} src={logo} />
                        </View>
                        <View style={styles.tituloReporte}>
                            <Text>{"Reporte diario"}</Text>
                            <Text>{"Movimiento de mineral báscula"}</Text>
                        </View>
                        <View style={styles.fechaContainer}>
                            <View style={styles.fechaTabla}>
                                <View style={styles.headerTablaFecha}>
                                    <Text>{"FECHA"}</Text>
                                </View>
                                <View style={styles.contenidoTablaFecha}>
                                    <Text>{"07/06/2023"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                
                <View style={styles.tablaReporte}>
                    <View style={styles.header}>
                        <View style={styles.headerTabla1}>
                            <Text>{"Minas"}</Text>
                        </View>
                        <View style={styles.headerTabla2}>
                            <Text>{"Existencia inicial"}</Text>
                        </View>
                        <View style={styles.headerTabla3}>
                            <Text>{"Acarreo"}</Text>
                        </View>
                        <View style={styles.headerTabla4}>
                            <Text>{"Trituradas"}</Text>
                        </View>
                        <View style={styles.headerTabla5}>
                            <Text>{"Existencia patios"}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Minesites"}</Text>
                        </View>
                        <View style={styles.headerMina2}>
                            <Text>{"Tons."}</Text>
                        </View>
                        <View style={styles.headerMina3}>
                            <Text>{"Hoy (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina4}>
                            <Text>{"A la fecha (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina5}>
                            <Text>{"P1 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina6}>
                            <Text>{"P1 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina7}>
                            <Text>{"P2 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina8}>
                            <Text>{"P2 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina9}>
                            <Text>{"TONS."}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Nivel 395"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Nivel 350"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Gallo Verde"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"."}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Total"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>


                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Guadalupe"}</Text>
                        </View>
                        <View style={styles.headerMina2}>
                            <Text>{"Tons."}</Text>
                        </View>
                        <View style={styles.headerMina3}>
                            <Text>{"Hoy (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina4}>
                            <Text>{"A la fecha (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina5}>
                            <Text>{"P1 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina6}>
                            <Text>{"P1 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina7}>
                            <Text>{"P2 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina8}>
                            <Text>{"P2 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina9}>
                            <Text>{"TONS."}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"C-21"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Dique"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Cuerpo                    Antimonio"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"."}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Total"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>


                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Balcones"}</Text>
                        </View>
                        <View style={styles.headerMina2}>
                            <Text>{"Tons."}</Text>
                        </View>
                        <View style={styles.headerMina3}>
                            <Text>{"Hoy (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina4}>
                            <Text>{"A la fecha (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina5}>
                            <Text>{"P1 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina6}>
                            <Text>{"P1 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina7}>
                            <Text>{"P2 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina8}>
                            <Text>{"P2 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina9}>
                            <Text>{"TONS."}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Balcones"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"."}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Total"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>


                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"."}</Text>
                        </View>
                        <View style={styles.headerMina2}>
                            <Text>{"Tons."}</Text>
                        </View>
                        <View style={styles.headerMina3}>
                            <Text>{"Hoy (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina4}>
                            <Text>{"A la fecha (Tons.)"}</Text>
                        </View>
                        <View style={styles.headerMina5}>
                            <Text>{"P1 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina6}>
                            <Text>{"P1 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina7}>
                            <Text>{"P2 HOY (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina8}>
                            <Text>{"P2 A LA FECHA (TONS.)"}</Text>
                        </View>
                        <View style={styles.headerMina9}>
                            <Text>{"TONS."}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"."}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Total"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.tituloEmbarquesConc}>
                        <Text>{"EMBARQUES DE CONCENTRADOS"}</Text>
                </View>

                <View style={styles.tablaEmbarquesConc}>
                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Embarques"}</Text>
                        </View>
                        <View style={styles.headerConc2}>
                            <Text>{"Conc. Pb (Ton)"}</Text>
                        </View>
                        <View style={styles.headerConc3}>
                            <Text>{"Conc. Cu (ton)"}</Text>
                        </View>
                        <View style={styles.headerConc4}>
                            <Text>{"Conc. Zn (ton)"}</Text>
                        </View>
                        <View style={styles.headerConc5}>
                            <Text>{"Conc. Au/Ag (ton)"}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Minas"}</Text>
                        </View>
                        <View style={styles.headerMina2}>
                            <Text>{"Hoy"}</Text>
                        </View>
                        <View style={styles.headerMina3}>
                            <Text>{"A la fecha"}</Text>
                        </View>
                        <View style={styles.headerMina4}>
                            <Text>{"Hoy"}</Text>
                        </View>
                        <View style={styles.headerMina5}>
                            <Text>{"A la fecha"}</Text>
                        </View>
                        <View style={styles.headerMina6}>
                            <Text>{"Hoy"}</Text>
                        </View>
                        <View style={styles.headerMina7}>
                            <Text>{"A la fecha"}</Text>
                        </View>
                        <View style={styles.headerMina8}>
                            <Text>{"Hoy"}</Text>
                        </View>
                        <View style={styles.headerMina9}>
                            <Text>{"A la fecha"}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Minesites"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Guadalupe"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Balcones"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>

                    <View style={styles.headerMina}>
                        <View style={styles.headerMina1}>
                            <Text>{"Jales"}</Text>
                        </View>
                        <View style={styles.contentMina2}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina3}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina4}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina5}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina6}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina7}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina8}>
                            <Text>{""}</Text>
                        </View>
                        <View style={styles.contentMina9}>
                            <Text>{""}</Text>
                        </View>
                    </View>


                </View>
                    
                </View>
            </Page>
        </Document>
    );
  
export default ReporteMovimientoBasculaPDF