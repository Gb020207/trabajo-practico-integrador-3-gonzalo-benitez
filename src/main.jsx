import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

const root = document.getElementById("root")




ReactDOM.createRoot(root).render(
  <StrictMode>
 <BrowserRouter>
    <App/>
  </BrowserRouter>,
  </StrictMode>
 
);