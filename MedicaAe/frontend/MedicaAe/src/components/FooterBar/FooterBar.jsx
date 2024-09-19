import { NavLink } from "react-router-dom";
import styles from "./FooterBar.module.css";
import { Input } from "../Inputs/Input";
import { useState } from "react";

export const FooterBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [email, setEmail] = useState("");
  return (
    <footer>
      <div className={styles.footer_bar}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <p>Receba novidades do MedicAê</p>
            <Input
              type={"email"}
              name={"email"}
              className={styles.receive_atts}
              placeholder={"E-mail"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button className={styles.button}>
              <p>⟶</p>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
