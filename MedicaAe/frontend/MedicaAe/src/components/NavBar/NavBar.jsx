import { useAuth } from "../../context/AuthProvider";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <nav className={styles.main_box}>
      <div className={styles.logo}>MedicAê</div>
      <div className={styles.links}>
        <NavLink to={"/dashboard"}>Início</NavLink>
        <NavLink to={"/search"}>Pesquisar</NavLink>
        <NavLink to={"/alerts"}>Notificações</NavLink>
        <NavLink to={"/medicies"}>Medicamentos</NavLink>
        <NavLink to={"/configs"}>Configurações</NavLink>
        <NavLink to={"/"} onClick={logout}>
          Logout
        </NavLink>
      </div>
    </nav>
  );
};
