// Styles
import "./App.css";

// Context API's
import { AuthProvider } from "./context/AuthProvider";

// Pages
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import { ConfigPage } from "./pages/SystemPages/ConfigPage/ConfigPage";
import { DashboardPage } from "./pages/SystemPages/DashboardPage/DashboardPage";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Template } from "./components/Template/Template";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Patients } from "./pages/PatientsPage/Patients";
import { StoragePage } from "./pages/SystemPages/StoragePage/StoragePage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Template>
            <Routes>
              <Route path={"/register"} element={<RegisterPage />} />

              <Route path={"/login"} element={<LoginPage />} />

              <Route path={"/"} element={<HomePage />} />

              <Route path={"/about"} element={<AboutPage />} />

              <Route path={"/faq"} element={<FaqPage />} />

              <Route
                path={"/dashboard"}
                element={<PrivateRoute element={<DashboardPage />} />}
              />
              <Route
                path={"/configs"}
                element={<PrivateRoute element={<ConfigPage />} />}
              />
              <Route
                path={"/patients"}
                element={<PrivateRoute element={<Patients />} />}
              />
              <Route
                path={"/storage"}
                element={<PrivateRoute element={<StoragePage/>} />}
              />
            </Routes>
          </Template>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
