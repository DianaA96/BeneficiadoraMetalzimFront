import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import ReporteMovimientoBasculaPDF from './reports/ReporteMovimientoBasculaPDF'

import '../App.css';

const width = window.innerWidth; 
const height = window.innerHeight; 

class PdfRenderer extends Component {
  render() {
    return (
        <div>
            <PDFViewer width={width} height={height} className="app" >
                <ReporteMovimientoBasculaPDF/>
            </PDFViewer>
        </div>
    );
  }
}

export default PdfRenderer;