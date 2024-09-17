import { NavLink } from "react-router-dom";

//styles
import styles from "./HomeNavbar.module.css";
import { useAuth } from "../../context/AuthProvider";

export const HomeNavbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink to={"/login"} onClick={logout}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"} className={styles.register_btn}>
              Registrar
            </NavLink>
          </>
        )}
      </div>
      <div>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
        <NavLink to={"/faq"}>FAQ</NavLink>
        <NavLink to={"/contact"}>Contato</NavLink>
        <NavLink to={"/pt/dashboard"}>Main</NavLink>
      </div>
      <div className={styles.logo}>
        <a>MedicAê</a>
      </div>
    </nav>
  );
};
