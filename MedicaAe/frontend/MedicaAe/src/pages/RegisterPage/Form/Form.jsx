// React
import { useState } from "react";
// Components
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
// Styles
import styles from "./Form.module.css";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [displayName, setDisplayName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
              type="number"
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
              name="password"
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
          name="email"
          required
          placeholder="exemplo@medicae.com"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
          }}
        />
        <button className={styles.base_button}>Cadastrar</button>
      </form>
    </div>
  );
};
