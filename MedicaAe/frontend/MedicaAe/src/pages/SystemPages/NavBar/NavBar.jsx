import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.main_box}>
      <div className={styles.logo}>MedicAê</div>
      <div className={styles.links}>
        <NavLink to={"/pt/dashboard"}>Início</NavLink>
        <NavLink to={"/pt/search"}>Pesquisar</NavLink>
        <NavLink to={"/pt/alerts"}>Notificações</NavLink>
        <NavLink to={"/pt/medicies"}>Medicamentos</NavLink>
        <NavLink to={"/pt/configs"}>Configurações</NavLink>
      </div>
    </nav>
  );
};
