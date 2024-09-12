import { NavLink } from "react-router-dom";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import { Form } from "./Form/Form";
import styles from "./LoginPage.module.css";
import { FooterBar } from "../../components/FooterBar/FooterBar";
export const LoginPage = () => {
  return (
    <>
      <TinyHomeNavbar />
      <div className="container">
        <div className={styles.login}>
          <Form />
          <NavLink className={styles.create_account} to="/register">
            Não tem uma conta? Crie agora!
          </NavLink>
        </div>
        <div className={styles.footer}>
          <FooterBar />
        </div>
      </div>
    </>
  );
};
