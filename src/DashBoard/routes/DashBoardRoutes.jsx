import { Navigate, Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/DashBoardPage"


export const DashBoardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DashBoardPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
