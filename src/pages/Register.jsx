import { Link } from "react-router";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { Loading } from "../components/Loading";

export function Register({ onLoginSuccess }) {
  const { handleReset, handleChange, user } = useForm({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
  });
  useForm;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const usuario = {
      name: user.firstname,
      lastname: user.lastname,
      email: user.email,
      username: user.username,
      password: user.password,
    };
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(usuario),
      });
      const data = res.json();

      if (res.ok) {
        onLoginSuccess();
      } else {
        alert(data.message || "Error al registrar el usuario");
        handleReset();
      }
    } catch (error) {
      alert("Error interno del servidor");
      handleReset();
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main>
        {loading && <Loading />}
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Username"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="firstname">Nombre</label>
            <input
              type="text"
              name="firtname"
              value={user.firstname}
              placeholder="Firstname"
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <label htmlFor="lastname"> Apellido </label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            placeholder="Lastname"
            onChange={handleChange}
            disabled={loading}
          />
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            name="dni"
            value={user.dni}
            placeholder="1245"
            onChange={handleChange}
            disabled={loading}
          />
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
            disabled={loading}
          />
          <label htmlFor="password"> Contraseña </label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
            disabled={loading}
          />
        </form>
      </main>
      <p>Ya tienes una cuenta? {""}</p>
      <Link to="/login">
        Iniciar Sesión
      </Link>
    </>
  );
}
