import React from "react";
import { NavBar } from "./routes/components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { InicioScreen } from "./routes/InicioScreen";
import { LinuxScreen } from "./routes/LinuxScreen";
import { ContactoScreen } from "./routes/ContactoScreen";
import { SolucionesScreen } from "./routes/SolucionesScreen";
import { CiberseguridadScreen } from "./routes/CiberseguridadScreen";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<InicioScreen></InicioScreen>}></Route>
        <Route path="/linux" element={<LinuxScreen></LinuxScreen>}></Route>
        <Route path="/contacto" element={<ContactoScreen></ContactoScreen>}></Route>
        <Route path="/soluciones" element={<SolucionesScreen></SolucionesScreen>}></Route>
        <Route path="/ciberseguridad" element={<CiberseguridadScreen></CiberseguridadScreen>}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
};
