import { useState, useEffect } from "react";
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import styles from "./Form.module.css";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      if (!isAuthenticated) {
        console.log(isAuthenticated, "add");
        rootElement.classList.add("unlogged");
      } else {
        console.log(isAuthenticated, "remove");

        rootElement.classList.remove("unlogged");
      }
    }
  }, [isAuthenticated]);
  const handleSubmit = (e) => {
    login();
    navigate("/dashboard");
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
