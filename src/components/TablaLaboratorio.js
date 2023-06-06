import React, {useState, useEffect} from "react";
import "../styles/TablaLab.css"

const TablaLaboratorio = ({ tableData, copyTableData, turno}) => {
    return (
        <>
            <div className="cabeza">
                <span className="turno">{turno}</span>
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
                            <td>{row.concentrado}</td>
                            <td>{row.Ag}</td>
                            <td>{row.Pb}</td>
                            <td>{row.Zn}</td>
                            <td>{row.Cu}</td>
                            <td>{row.Fe}</td>
                            <td>{row.Sb}</td>
                            <td>{row.As}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />
        </>
    )
}

export default TablaLaboratorio;
