import { useState, useEffect } from "react";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import { Form } from "./Form/Form";
import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
export const RegisterPage = () => {
  return (
    <>
      <TinyHomeNavbar />
      <div className="container">
        <div className={styles.register_box}>
          <Form />
          <NavLink to="/login" className={styles.already_link}>
            Já tem uma conta?
          </NavLink>
        </div>
        <div className="subfooter">
          <div className="info">
            <div className="email"></div>
            <div className="contato"></div>
          </div>
          <div className="text"></div>
        </div>
      </div>
    </>
  );
};
