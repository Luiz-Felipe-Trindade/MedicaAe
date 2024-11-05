<<<<<<< HEAD
// React
import { useState } from "react";
// Components
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
// Styles
=======
import { useState } from "react";
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import axios from 'axios';
>>>>>>> 3102a48b3a90286bd6d990704c0d174b9a0e1593
import styles from "./Form.module.css";

export const Form = () => {
  const [displayName, setDisplayName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação: checar se email e confirmação de email correspondem
    if (email !== confirmEmail) {
      alert('Os emails não correspondem!');
      return;
    }

    // Validação: checar se senha e confirmação de senha correspondem
    if (password !== confirmPassword) {
      alert('As senhas não correspondem!');
      return;
    }

    try {
      // Enviar dados de registro para o back-end
      const response = await axios.post('http://localhost:3000/auth/register', {
        name: displayName,
        cpf,
        email,
        password
      });

      alert('Registro bem-sucedido!');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert(`Falha no registro: ${error.response.data.message || error.response.data.error}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.small_input}>
            <InputWithLabel
              label="Nome Completo"
              placeholder={"Jorge Vagner"}
              type="text"
              name="displayName"
              required
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
            <InputWithLabel
              label="CPF"
              type="text"
              name="cpf"
              required
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
          </div>
          <div className={styles.small_input}>
            <InputWithLabel
              label="Senha"
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputWithLabel
              label="Confirmação de senha"
              type="password"
              name="confirmPassword"
              required
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <InputWithLabel
          label="Email"
          type="email"
          name="email"
          required
          placeholder="exemplo@medicae.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputWithLabel
          label="Confirmação de email"
          name="confirmEmail"
          required
          placeholder="exemplo@medicae.com"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
          }}
        />
        <button type="submit" className={styles.base_button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};
