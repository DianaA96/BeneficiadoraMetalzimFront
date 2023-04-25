import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"

function HistorialAnalisis() {
  return (
    <>
        <HeaderDiseno></HeaderDiseno>
        <ListaReportes></ListaReportes>
        <Menu rol="laboratorista"></Menu>
    </>
  )
}

export default HistorialAnalisis