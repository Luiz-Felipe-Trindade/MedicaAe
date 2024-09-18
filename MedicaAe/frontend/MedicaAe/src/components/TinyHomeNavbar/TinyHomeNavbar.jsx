import { NavLink } from "react-router-dom";

//styles
import styles from "./TinyHomeNavbar.module.css";

export const TinyHomeNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
        <NavLink to={"/faq"}>FAQ</NavLink>
        {/* <NavLink to={"/contact"}>Contato</NavLink> */}
      </div>
      <div className={styles.logo}>
        <a>MedicAê</a>
      </div>
    </nav>
  );
};
