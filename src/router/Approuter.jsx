import { Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Task } from "../pages/Task";
import { Private } from "./PrivateRouter";
import { Public } from "./PublicRouter";


export const Approutes = ({isAuth,onLogin,onLogout}) => {
<Routes>
        <Route 
         path="/login"
         element={
            <Public isAuth={isAuth}>
                <Login onLoginSuccess={onLogin}/>
            </Public>
         }
        >
            <Route
            path="/register"
            element={
                <Public isAuth={isAuth}>
                    <Register onLoginSuccess={onLogin}/>
                </Public>
            }></Route>
            <Route
            path="/home"
            element={
                <Private>
                    <Home/>
                </Private>
            }></Route>
            <Route
            path="/profile"
            element={
                <Private isAuth={isAuth}>
                    <Profile onLogout={onLogout}/>
                </Private>
            }></Route>
            <Route 
            path="/task"
            element={
                <Private isAuth={isAuth}>
                    <Task />
                </Private>
            }>
            </Route>

        </Route>
        <Route
        path="*"
        element={<Navigate to={isAuth ? "/home" : "/login"}/>}/>
</Routes>
}
