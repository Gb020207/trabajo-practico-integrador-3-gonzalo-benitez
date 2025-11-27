import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { Loading } from "../components/Loading";
import { Link } from "react-router";


export const Login = ({onLoginSuccess}) =>{
    const {handleReset,handleChange,user} = useForm({
        username:"",
        password:"",
    })
    useForm;
    const [loading,setLoading] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const userRes = await fetch("http://localhost:3000/api/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                credentials:"include",
                body:(JSON.stringify(user))
            } )
            const userData = await userRes.json()

            if(userRes.ok){
                onLoginSuccess()
            } else {
                alert(userData.message || "Credencial incorrecta")
                handleReset()
            }
        } catch (error) {
            console.log(error)
            alert("Error interno del servidor")
            handleReset()
            
        }finally{
            setLoading(false)
        }
        
    }
    return(
        <>
            <main>
                {loading && <Loading/>}
                 <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                    Username 
                </label>
                  <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} required/> 
                </div>
                <div>
                <label htmlFor="password">
                   Password
                </label>
                 <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} required/>
                </div>
                <button type="submit">Login</button>
                
            </form>
            <p> No posees una cuenta? {""}</p>
            <Link to="/register">
             Registrarse
            </Link>
            </main>
           
        </>
    )
}