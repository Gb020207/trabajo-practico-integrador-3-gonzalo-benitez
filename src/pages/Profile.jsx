import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Loading } from "../components/Loading"


export const Profile = () =>{
    const [userData,setUserData] = useState(null)
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    const profile = async () => {
       const res = await fetch("http://localhost:3000/api/profile",{
        credentials:"include"
       })
    }
    
}
