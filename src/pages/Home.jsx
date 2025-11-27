import { useEffect, useState } from "react"
import { Loading } from "../components/Loading"
import { Link } from "react-router"



export const Home = () =>{
    const [userData,setUserData] = useState(null)
    const [task, setTask] = useState([])
    const [loading,setLoading] = useState(true)

    const Homedata = async () => {
       try {
         const userTask = fetch("http://localhost:3000/api/task",{
            credentials:"include"

        })
        const userData = fetch("http://localhost:3000/api/profile",{
            credentials:"include"
        })

        const [userRes,taskRes] = await Promise.all([
            userTask,
            userData
        ])
        if(userRes.ok){
            const profile = await userData.json();
            setUserData(profile.user)
        } else {
            console.log("Error al traer el usuario")
        }
        if(taskRes.ok){
            const task = await taskRes.json();
            setTask(userTask.task || (Array.isArray(userTask) ? userTask : []))
        } else {
            console.log("Error al cargar las Tareas")
        }
     
       } catch (error) {
        console.log("Error interno de servidor",error)
       } finally {
        setLoading(false)
       }
      
    }
     useEffect(() => {
        Homedata();
     },[]);
        const totalTask = task.length;
        const taskComplete = task.filter((task) => task.is_complete).length
        const taskPending = totalTask - taskComplete;

        if(loading){
          return(
            <main>
              <Loading/>
            </main>
          )
            
        }
        return (
    <main>
      <div>
        <h1>
          Bienvenido,{" "}
          <span>{userData?.name || "Usuario"}</span>
        </h1>

      
        <div>
         
          <div>
            <h3>{totalTask}</h3>
            <p >Total de Tareas</p>
          </div>

         
          <div>
            <h3 >
              {taskComplete}
            </h3>
            <p>Completadas</p>
          </div>

         
          <div>
            <h3>
              {taskPending}
            </h3>
            <p>Pendientes</p>
          </div>
        </div>


        <div>
          <Link
            to="/task"
          >
            Ir a mis Tareas
          </Link>
        </div>
      </div>
    </main>
  );
};


