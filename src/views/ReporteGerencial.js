import HeaderDiseno from "../components/HeaderDiseno";
import Menu from "../components/Menu";
import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"
import "../styles/ReporteGerencial.css"
import "../styles/formulario.css"
import "../styles/Registro.css"
import "../styles/reporteGerencialView.css"
import CardReporteGerencial from '../components/CardReporteGerencial'

function ReporteGerencial() {

    return(
        <>
            <HeaderDiseno
            titulo={"Reporte gerencial"}
            subtitulo={"Del dia especifico"}
            isDate={true}
            />

            <div className="cont-tabla">
                <div className="seccion-reporte">
                    <div className="header-seccion-reporte">
                        <div className='secc-1'>
                            <h3 className="p1000 titulo-seccion">Movimiento de mineral</h3>
                            <div className="sep-seccion"></div>
                        </div>                   
                    </div>
                    <div className="movmineral">
                        
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Existencia</p>
                            <p className="n700">Dia inicial</p>
                            <p className="fontRGValue">320</p>
                        </div>
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Acarreo hoy</p>
                            <p className="n700">TMH</p>
                            <p className="fontRGValue">10</p>
                        </div>
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Acum. Mensual</p>
                            <p className="n700">TMH</p>
                            <p className="fontRGValue">10</p>
                        </div>
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Total</p>
                            <p className="n700">TMH</p>
                            <p className="fontRGValue">10</p>
                        </div>
                    </div>
                    <div className="movmineral">
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Molidas</p>
                            <div className="movmineral-2">
                                <div className='movmineral-subitem'>
                                    <p className="n700">Hoy (TMS)</p>
                                    <p className="fontRGValue">10</p>
                                </div>
                                <div className='movmineral-subitem'>
                                    <p className="n700">Acum. (TMS)</p>
                                    <p className="fontRGValue">10</p>
                                </div>
                            </div>
                        </div>
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Existencia</p>
                            <p className="n700">Patios (TMH)</p>
                            <p className="fontRGValue">10</p>
                        </div> 
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral">Humedad</p>
                            <p className="n700">%</p>
                            <p className="fontRGValue">10</p>
                        </div>
                    </div>           
                </div>
            </div>  
        <div className="cont-tabla">
            <div class="containerRG">
            <div class="tableRG">

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
                <div class="cellRG">0</div>
                <div class="cellRG">0</div>
                
                <p style={{marginRight:"5px"}}>10%</p>
                <p class="progress-bar">
                    <diV class="progress" style={{width: "10%", textAlign: "end", color: "white"}}></diV>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin" >Cu</div>
                <div class="cellRG">0</div>
                <div class="cellRG">0</div>

                <p style={{marginRight:"5px"}}>100%</p>
                <p class="progress-bar">
                    <diV class="progress" style={{width: "100%", textAlign: "end", color: "white"}}></diV>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Zn</div>
                <div class="cellRG">0</div>
                <div class="cellRG">0</div>

                <p style={{marginRight:"5px"}}>50%</p>
                <p class="progress-bar">
                    <diV class="progress" style={{width: "50%", textAlign: "end", color: "white"}}></diV>
                </p>


                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Pb</div>
                <div class="cellRG">0</div>
                <div class="cellRG">0</div>

                <p style={{marginRight:"5px"}}>80%</p>
                <p class="progress-bar">
                    <diV class="progress" style={{width: "80%", textAlign: "end", color: "white"}}></diV>
                </p>

                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Fe</div>
                <div class="cellRG">0</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>
                
                <div class="rowRG">
                <div class="cellRG fontRGMin">Sb</div>
                <div class="cellRG">0</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">As</div>
                <div class="cellRG">0</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

                <div class="rowRG">
                <div class="cellRG fontRGMin">Total</div>
                <div class="cellRG">0</div>
                <div class="cellRG"></div>
                <div class="cellRG"></div>
                </div>

            </div>
            <div class="cardsRG">
                <CardReporteGerencial style='light' precio='5,236 ton' mineral='TMS'></CardReporteGerencial>
                <CardReporteGerencial style='dark' precio='954 ton' mineral='CONC pb'></CardReporteGerencial>
                <CardReporteGerencial style='light' precio='3.2' mineral='Relación concentrado'></CardReporteGerencial>
            </div>
            </div>
        <div className="seccion-reporte">
                    <div className="header-seccion-reporte">
                        <div className='secc-1-center'>
                            <div className="sep-seccion"></div>
                            <h3 className="p1000 titulo-seccion">Valor del mineral (USD)</h3>
                            <div className="sep-seccion"></div>
                        </div>
                    </div>
                    <div className="cont-valormineral">
                        <div className="item-valormineral">
                            <h1 className="blanco bold">$28.42</h1>
                            <p className="n800 bold">Hoy</p>
                        </div>
                        <div className="item-valormineral">
                            <h1 className="blanco bold">$43.42</h1>
                            <p className="n800 bold">A la fecha</p>
                        </div>
                    </div>

        </div>
        </div>

    
        <Menu rol="gerente" activeTab="summarize" landing="/gerencia"></Menu> : null
        </>
    );
};
export default ReporteGerencial;
