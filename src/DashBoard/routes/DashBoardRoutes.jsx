import { Navigate, Route, Routes } from "react-router-dom"
import { DashBoardMedicoPage } from "../pages/DashBoardMedicoPage"

import { RegisterTratamientoPage } from "../pages/RegisterTratamientoPage"

import ViewEmergenciasPage from "../pages/ViewEmergenciasPage"
import ViewTratamientosPage from "../pages/ViewTratamientos"
import { DashBoardPersonalMedicoPage } from "../pages/DashBoardPersonalMedicoPage"
import { ViewHistorialEmergenciasPage } from "../pages/ViewHistorialEmergencias"
import RegisterEmergenciaPage from "../pages/RegisterEmergencia"


export const DashBoardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DashBoardMedicoPage /> } />
        <Route path="/personalMedico" element={ <DashBoardPersonalMedicoPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
        <Route path="/emergencias" element={ <ViewEmergenciasPage/> } />
        <Route path="/registrar-tratamiento" element={ <RegisterTratamientoPage /> } />
        <Route path="/historial-tratamientos" element={ <ViewTratamientosPage /> } />

        <Route path="/registrar-emergencia" element={ <RegisterEmergenciaPage /> } />
        <Route path="/historial-emergencias" element={ <ViewHistorialEmergenciasPage /> } />
    
    </Routes>
  )
}
