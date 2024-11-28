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
import { StoragePage } from "./pages/SystemPages/StoragePage/StoragePage";
import { PatientsPage } from "./pages/SystemPages/PatientsPage/PatientsPage";
import { AddPatientsPage } from "./pages/SystemPages/PatientsPage/AddPatientsPage/AddPatientsPage";
import { RegisterMedicine } from "./pages/SystemPages/RegisterMedicine/RegisterMedicine";
import { MedicinesPage } from "./pages/SystemPages/MedicinesPage/MedicinesPage";
import { StorageEntrancePage } from "./pages/SystemPages/StorageEntrancePage/StorageEntrancePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Template } from "./components/Template/Template";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { TreatmentPage } from "./pages/SystemPages/TreatmentPage/TreatmentPage";

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
              <Route path={"*"} element={<NotFoundPage />} />
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
                element={<PrivateRoute element={<PatientsPage />} />}
              />
              <Route
                path={"/patients/add"}
                element={<PrivateRoute element={<AddPatientsPage />} />}
              />
              <Route
                path={"/storage"}
                element={<PrivateRoute element={<StoragePage />} />}
              />
              <Route
                path={"/medicines/add"}
                element={<PrivateRoute element={<RegisterMedicine />} />}
              />
              <Route
                path={"/medicines"}
                element={<PrivateRoute element={<MedicinesPage />} />}
              />
              <Route
                path={"/treatment"}
                element={<PrivateRoute element={<TreatmentPage />} />}
              />
              <Route
                path={"/storage/entrance"}
                element={<PrivateRoute element={<StorageEntrancePage />} />}
              />
            </Routes>
          </Template>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
