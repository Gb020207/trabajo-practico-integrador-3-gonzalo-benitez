import { Navigate, Outlet } from "react-router"


export const Public = () => {
    isLogged = localStorage.getItem("token")
    return !isLogged ? <Outlet/> : <Navigate to="/home"/>
}