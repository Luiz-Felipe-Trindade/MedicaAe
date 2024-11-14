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

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Template } from "./components/Template/Template";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
<<<<<<< HEAD
import { Patients } from "./pages/PatientsPage/Patients";
import { StoragePage } from "./pages/SystemPages/StoragePage/StoragePage";
=======
>>>>>>> cf003a8ba47522a68da4f695139506ca2a92a23b

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
                path={"/registermedicine"}
                element={<PrivateRoute element={<RegisterMedicine/>} />}
              />
              
            </Routes>
          </Template>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
