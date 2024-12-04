// React
import { NavLink } from "react-router-dom";
// Components
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { IconsBar } from "../../components/IconsBar/IconsBar";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
// Form
import { Form } from "./components/Form/Form";
// Styles
import styles from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <TinyHomeNavbar />
      <div className={styles.subcontainer}>
        <div className={styles.register_box}>
          <Form />
          <NavLink to="/login" className={styles.already_link}>
            Já tem uma conta?
          </NavLink>
        </div>
      </div>
      <div className={styles.icons}>
        <IconsBar />
      </div>
    </div>
  );
};
