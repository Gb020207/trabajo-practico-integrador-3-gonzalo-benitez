import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const Private = () =>{
    const isLogged = localStorage.getItem("token");
    return isLogged ? (
    <>
    <Navbar/>
    <Outlet/>
    </>) : (
        <Navigate to="/login"/>
    )
    
}