// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
// ContextAPI
import { useAuth } from "../../../context/AuthProvider";
// Styles
import styles from "./Form.module.css";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    login();
    navigate("/");
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          label="Email"
          type="email"
          name="email"
          required
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputWithLabel
          label="Senha"
          type="password"
          name="password"
          required
          placeholder={"Insira sua senha"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={styles.base_button}>Entrar</button>
      </form>
    </div>
  );
};
