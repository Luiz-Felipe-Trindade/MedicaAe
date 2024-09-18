// Styles
import "./App.css";

// Context API's

import { AuthProvider, useAuth } from "./context/AuthProvider";

// Pages
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/SystemPages/MainPage/MainPage";

import { useEffect } from "react";
import { Template } from "./components/Template/Template";
// Components

function App() {
  const rootElement = document.getElementById("root");
  rootElement.classList.add("unlogged");

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Template>
            <Routes>
              <Route path={"/register"} element={<RegisterPage />}>
                Registrar
              </Route>
              <Route path={"/login"} element={<LoginPage />}>
                Entrar
              </Route>
              <Route path={"/"} element={<HomePage />}>
                MedicAê
              </Route>
              <Route path={"/"} element={<HomePage />}>
                Inicio
              </Route>
              <Route path={"/about"} element={<AboutPage />}>
                Sobre
              </Route>
              {/* <Route path={"/contact"} element={<ContactPage />}>
                Contato
              </Route> */}
              <Route path={"/faq"} element={<FaqPage />}>
                FAQ
              </Route>
              <Route path={"/dashboard"} element={<MainPage />}>
                Main
              </Route>
            </Routes>
          </Template>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
