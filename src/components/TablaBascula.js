import React from 'react'
import "../styles/TablaBascula.css"

function TablaBascula(props) {

    return (
        <table summary="Mi tabla">
            <thead>
                <tr>
                <th scope="col">Mina{props.col0}</th>
                <th scope="col">Estancia inicial{props.col1}</th>
                <th scope="col">Acarreo{props.col2}</th>
                <th scope="col">Trituradas{props.col3}</th>
                <th scope="col">Existencia patios{props.col4}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Minesites{props.fila1}</th>
                    <td>13.5</td>
                    <td>87.3</td>
                    <td>9</td>
                    <td>87.3</td>
                </tr>
                <tr>
                    <th scope="row">Guadalupe{props.fila2}</th>
                    <td>23.5</td>
                    <td>87.3</td>
                    <td>6</td>
                    <td>9.6</td>
                </tr>

                <tr>
                    <th scope="row">Balcones{props.fila3}</th>
                    <td>6.4</td>
                    <td>87.3</td>
                    <td>17</td>
                    <td>6.5</td>
                </tr>
                
                <tr>
                    <th scope="row">Total</th>
                    <td>77</td>
                    <td>60</td>
                    <td>90</td>
                    <td>50</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TablaBascula