import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Loading } from "../components/Loading";

export const Profile = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const profile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data.user);
      } else {
        console.log("Error al obtener usuario ,Se esta cerrando sessión");
        onLogout();
        navigate("/login");
      }
    } catch (error) {
      console - log("Error interno del servidor");
      onLogout();
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    profile();
  }, []);
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
      });
    } catch (error) {
      console.log("Error del servidor", error);
    } finally {
      onLogout();
    }
  };
  return (
    <main>
      <section>
        {loading && <Loading />}
        <div>
          <div>
            {/* Si el usuario tiene Name entonces colocara la primer letra en mayuscula caso contrario colocara "U" */}
            {userData?.name ? userData.name : "U"}
          </div>
          <h1>
            {userData?.name
              ? `${userData.name} ${userData.lastname}`
              : "Mi Perfil"}
          </h1>
          <p>Mi información</p>
        </div>
        {/* Funciona que aplica una division horizontal */}
        <hr />
        { !loading && userData && (
        <div>
          <div>
            <span>ID del usuario</span>
            <p>{userData.id}</p>
          </div>
          <div>
            <span>Nombre</span>
            <p>{userData.name}</p>
          </div>
          <div>
            <span>Apellido</span>
            <p>{userData.lastname}</p>
          </div>
            {userData.email && (
              <div>
                <span>Email del usuario</span>
                <p>userData.email</p>
              </div>
            )}
        
          <button onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>)}
      </section>
          
    </main>
          
);
};
