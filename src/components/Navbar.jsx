import { Link, useNavigate } from "react-router";

export function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
        window.location.reload();
    }
    return(
        <>
         <Link to="/home">Home</Link>
         <Link to="/task">Task</Link>
        <Link onClick={handleLogout}>Logout</Link>
        </>
       
    )
}