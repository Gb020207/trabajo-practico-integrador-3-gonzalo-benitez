import { Link, useNavigate } from "react-router";

export function Navbar({isAuth,onLogout}) {
    
    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3000/api/logout",{
                method:"POST",
                credentials:"include",
            })
        } catch (error) {
            console.log("Error al cerrar sesion desde el backend",error)
        }finally{
            onLogout();
        }
    }
    return(
        <nav>
            <div>

        <h1>Trabajo <span>Integrador</span></h1>
            </div>
       <div>
        
        {isAuth ? (
            <>
            <Link to="/home">
                Inicio 
            </Link>
            <Link to="/task">Tareas</Link>
            <Link to="/profile">Mi perfil</Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
        ) : (
            <>
            <Link to="/login">
            Login 
            </Link>
            <Link to="/register">Register</Link>
            </>
        )

        }

       </div>
       </nav>
    )
}