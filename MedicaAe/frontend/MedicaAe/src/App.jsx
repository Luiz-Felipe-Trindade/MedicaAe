// Styles
import "./App.css";

// Pages
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
