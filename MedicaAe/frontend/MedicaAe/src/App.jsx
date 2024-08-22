// Styles
import "./App.css";

// Pages
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import ContactPage from "./pages/ContactPage/ContactPage";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import HomeNavbar from "./components/HomeNavbar";
import HomeFooter from "./components/HomeFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomeNavbar />
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
          <Route path={"/contact"} element={<ContactPage />}>
            Contato
          </Route>
          <Route path={"/faq"} element={<FaqPage />}>
            FAQ
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
