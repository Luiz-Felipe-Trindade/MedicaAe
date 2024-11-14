// React
import { NavLink } from "react-router-dom";
// Components
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { IconsBar } from "../../components/IconsBar/IconsBar";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
// Form
import { Form } from "./components/Form/Form";
// Styles
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <TinyHomeNavbar />
      <div className={styles.subcontainer}>
        <div className={styles.login}>
          <Form />
          <NavLink className={styles.create_account} to="/register">
            Não tem uma conta? Crie agora!
          </NavLink>
        </div>
        <div className={styles.footer}>
          <FooterBar />
        </div>
        <div className={styles.bar}></div>
        <div className={styles.icons}>
          <IconsBar />
        </div>
      </div>
    </div>
  );
};
