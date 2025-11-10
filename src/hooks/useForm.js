import { useState } from "react";
import { useNavigate } from "react-router";

export function UseForm(initialValue){
    const[user,setUser] = useState({initialState:{}})
    const navigate = useNavigate();
    const handleReset = (event) => {
        setUser(initialValue)
    }
    const handleForm = (event) => {
        event.preventDefault();
        console.log("Se envio el formulario",user)
        localStorage.setItem("userData",JSON.stringify(user));
        handleReset();
        navigate("/login")

    }
    const handleChange = (event) => {
        const {name,value} = event.target

        setUser({
            ...user,
            [name]:value
        })
    }
    return{
        user,
        handleChange,
        handleForm,
        handleReset,
    }
}