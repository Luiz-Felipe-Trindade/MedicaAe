import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import { HomeNavbar } from "../../components/HomeNavbar/HomeNavbar";
import { useAuth } from "../../context/AuthProvider";
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { IconsBar } from "../../components/IconsBar/IconsBar";

export const HomePage = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className={styles.container}>
      <HomeNavbar />
      <div className={styles.content}>
        <h1>MedicAê</h1>
        <h2 className={styles.tittle}>Seu sistema de gestão de medicamentos</h2>
        <p className={styles.text}>
          MedicAê é um sistema de gestão de medicamentos voltado para hospitais
          e centros de cuidados para pessoas da terceira idade
        </p>
        <div>
          <NavLink to="/register" className={styles.register_btn}>
            Começar a fazer uma conta agora
          </NavLink>
          <NavLink to="/about" className={styles.btn}>
            Conheça um pouco sobre nós
          </NavLink>
        </div>
      </div>
      <div className={styles.icons}>
        <IconsBar />
      </div>
    </div>
  );
};
