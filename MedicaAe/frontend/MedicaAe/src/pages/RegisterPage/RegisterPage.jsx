import { useState, useEffect } from "react";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import { Form } from "./Form/Form";
import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { IconsBar } from "../../components/IconsBar/IconsBar";
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
        <div className={styles.footer}>
          <FooterBar />
        </div>
      </div>
      <div className={styles.icons}>
        <IconsBar />
      </div>
    </div>
  );
};
