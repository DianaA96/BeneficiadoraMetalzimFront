import React from "react";
import "../styles/TablaBascula.css";

const TablaBascula = ({ tableData }) => {
    return (
        <>
            <table className="tablonaB">
                <thead>
                    <tr>
                        <th></th>
                        {tableData.map(row => (
                            <th key={row.id}>
                                {row.col5}
                                <span>ton</span>
                            </th>
                        ))}
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TablaBascula;