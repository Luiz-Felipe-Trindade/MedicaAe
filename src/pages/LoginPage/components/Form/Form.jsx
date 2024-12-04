import { useState } from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";
import styles from "./Form.module.css";
import { useAuth } from "../../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import ErrorPopup from "../../../../components/PopUp/ErrorPopUp";
import axios from "axios"; // Adicionar axios para fazer a requisição

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [erroPopup, setErroPopup] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazer uma requisição POST para o backend
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        // Login bem-sucedido
        await login(email, password);
        navigate("/"); // Navegar após o login
      }
    } catch (error) {
      setErroPopup(
        "Falha no login: " + error.response?.data?.message || error.message
      );
    }
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
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className={styles.base_button}
        >
          Entrar
        </button>

        <ErrorPopup message={erroPopup} onClose={() => setErroPopup("")} />
      </form>
    </div>
  );
};
