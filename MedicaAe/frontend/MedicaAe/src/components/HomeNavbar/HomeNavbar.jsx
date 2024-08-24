import { NavLink } from "react-router-dom";

//styles
import styles from "./HomeNavbar.module.css";

export const HomeNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"} className={styles.register_btn}>
          Registrar
        </NavLink>
      </div>
      <div>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
        <NavLink to={"/faq"}>FAQ</NavLink>
        <NavLink to={"/contact"}>Contato</NavLink>
      </div>
      <div className={styles.logo}>
        <a>MedicAê</a>
      </div>
    </nav>
  );
};
