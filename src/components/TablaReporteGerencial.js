import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"
import "../styles/ReporteGerencial.css"
import "../styles/formulario.css"
import "../styles/Registro.css"
import "../styles/reporteGerencialView.css"
import CardPrecioMetal from '../components/CardPrecioMetalRG'
import CardReporteGerencial from '../components/CardReporteGerencial'


function TablaReporteGerencial(props) { 
    
    const values = props.Valor;
    const titulo = props.Clave
    const SumaConcentrados = props.Suma

    console.log(SumaConcentrados);

    let sum =  0;

    for (let i in values) {
        sum = sum + values[i];
    }

    let AgCont = values["tms"] * values["Ag"]/1000
    let CuCont = values["tms"] * values["Cu"]/1000
    let ZnCont = values["tms"] * values["Zn"]/1000
    let PbCont = values["tms"] * values["Pb"]/1000

    let AgAvg = values["tms"] * values["Ag"]/1000
    let CuAvg = values["tms"] * values["Cu"]/1000
    let ZnAvg = values["tms"] * values["Zn"]/1000
    let PbAvg = values["tms"] * values["Pb"]/1000




    return (
        <div class="containerRG" style={{marginBottom:"20px"}}> 
            <div class="tableRG"> 
            <div className="titleTableRG">{titulo}</div>

                <div class="rowRG">
                    <div class="cellRG"></div>
                    <div class="cellRG">
                        <p className="fontRGTitle"> Análisis </p>
                        <p> % </p>
                    </div>

                    <div class="cellRG">
                        <p className="fontRGTitle"> Contenido </p>
                        <p> Tons </p> 
                    </div>
                        
                    <div class="cellRG">
                        <p className="fontRGTitle"> Recuperación </p>
                        <p> % </p> 
                    </div>
                </div>


                <div class="rowRG">
                <div class="cellRG fontRGMin" >Ag</div>
                <div class="cellRG">{values.Ag}</div>
                <div class="cellRG"> {AgCont} g/t</div>
                <div class="cellRG">0 g/t</div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin" >Cu</div>
                <div class="cellRG">{values.Cu}</div>
                <div class="cellRG">{CuCont}</div>

                <p style={{flex:"0.30"}}>10%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <diV class="progress" style={{width: "10%",textAlign: "center", color: "gray"}}></diV>
                    </div>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Zn</div>
                <div class="cellRG">{values.Zn}</div>
                <div class="cellRG">{ZnCont}</div>
                
                <p style={{flex:"0.30"}}>100%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <diV class="progress" style={{width: "100%",textAlign: "center", color: "gray"}}></diV>
                    </div>
                </p>


                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Pb</div>
                <div class="cellRG">{values.Pb}</div>
                <div class="cellRG">{PbCont}</div>

                <p style={{flex:"0.30"}}>50%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <diV class="progress" style={{width: "50%",textAlign: "center", color: "gray"}}></diV>
                    </div>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Fe</div>
                <div class="cellRG">{values.Fe}</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>
                
                <div class="rowRG">
                <div class="cellRG fontRGMin">Sb</div>
                <div class="cellRG">{values.Sb}</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">As</div>
                <div class="cellRG">{values.As}</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Total</div>
                <div class="cellRG">{sum}</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

            </div>
            <div class="cardsRG">
                <CardReporteGerencial style='light' precio={values.tms} mineral='TMS'></CardReporteGerencial>
                <CardReporteGerencial style='dark' precio='954 ton' mineral='CONC pb'></CardReporteGerencial>
                <CardReporteGerencial style='light' precio='3.2' mineral='Relación concentrado'></CardReporteGerencial>
                <CardReporteGerencial style='dark' precio='954 ton' mineral='CONC pb'></CardReporteGerencial>

            </div>
        </div>
    )

}

export default TablaReporteGerencial;
