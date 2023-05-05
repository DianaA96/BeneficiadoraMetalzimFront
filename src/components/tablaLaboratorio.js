import React from "react";
import "../styles/TablaLab.css"

const TablaLaboratorio = ({ tableData, copyTableData }) => {
    return (
        <>
            <div className="cabeza">
                <span className="turno">Primer Turno</span>
                <button className="custom-button" onClick={copyTableData}>
                    <div className="button-content">
                        <span class="material-symbols-outlined"> content_copy</span>
                        <span className="button-text">Copiar valores</span>
                    </div>
                </button>
            </div>

            <table className="tablona">
                <thead>
                    <tr>
                        <th></th>
                        <th style={{ color: "#EF7B30" }}>
                            Ag
                            <span>g/ton</span>
                        </th>
                        <th>
                            Pb
                            <span>%</span>
                        </th>
                        <th style={{ color: "#EF7B30" }}>
                            Zn
                            <span>%</span>
                        </th>
                        <th>
                            Cu
                            <span>%</span>
                        </th>
                        <th style={{ color: "#EF7B30" }}>
                            Fe
                            <span>%</span>
                        </th>
                        <th>
                            Sb
                            <span>%</span>
                        </th>
                        <th style={{ color: "#EF7B30" }}>
                            As
                            <span>%</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.id}>
                            <td>{row.col0}</td>
                            <td>{row.col1}</td>
                            <td>{row.col2}</td>
                            <td>{row.col3}</td>
                            <td>{row.col4}</td>
                            <td>{row.col5}</td>
                            <td>{row.col6}</td>
                            <td>{row.col7}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />
        </>
    )
}

export default TablaLaboratorio;