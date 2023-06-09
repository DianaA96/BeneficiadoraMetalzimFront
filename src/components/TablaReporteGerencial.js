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
    const SumaConcentrados = props.totalConcentrados
    const Relacion =  values["tms"] / props.tmsCabeza

    console.log("SUMA concentrados", SumaConcentrados);

    let sum =  0;

    for (let i in values) {
        sum = sum + values[i];
    }

    let AgCont = values["tms"] * values["Ag"]/1000
    let CuCont = values["tms"] * values["Cu"]/100
    let ZnCont = values["tms"] * values["Zn"]/100
    let PbCont = values["tms"] * values["Pb"]/100


    let AgAvg = (AgCont * 100) / SumaConcentrados[0] 
    let PbAvg = (PbCont * 100) / SumaConcentrados[1] 
    let ZnAvg = (ZnCont * 100) / SumaConcentrados[2] 
    let CuAvg = (CuCont * 100) / SumaConcentrados[3] 

    let test = 10



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
                <div class="cellRG">{AgAvg.toFixed(2)} g/t</div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin" >Cu</div>
                <div class="cellRG">{values.Cu}</div>
                <div class="cellRG">{CuCont}</div>

                <p style={{flex:"0.30"}}>{CuAvg.toFixed(2)}%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <div class="progress" style={{width: `${CuAvg}%`,textAlign: "center", color: "gray"}}></div>
                    </div>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Zn</div>
                <div class="cellRG">{values.Zn}</div>
                <div class="cellRG">{ZnCont}</div>
                
                <p style={{flex:"0.30"}}>{ZnAvg.toFixed(2)}%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <div class="progress" style={{width:`${ZnAvg}%`,textAlign: "center", color: "gray"}}></div>
                    </div>
                </p>


                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Pb</div>
                <div class="cellRG">{values.Pb}</div>
                <div class="cellRG">{PbCont}</div>

                <p style={{flex:"0.30"}}>{PbAvg.toFixed(2)}%</p>
                <p style={{flex:"0.80"}}>
                    <div class="progress-bar">
                        <div class="progress" style={{width: `${PbAvg}%`,textAlign: "center", color: "gray"}}></div>
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
                <CardReporteGerencial style='dark' precio={Relacion} mineral='Relación concentrado'></CardReporteGerencial>

            </div>
        </div>
    )

}

export default TablaReporteGerencial;
