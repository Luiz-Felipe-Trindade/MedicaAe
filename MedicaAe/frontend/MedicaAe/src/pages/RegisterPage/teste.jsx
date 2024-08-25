import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import config from "./configuration";

const RegisterPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayLastName, setDisplayLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para a coleção 'medicae' no Firebase Firestore
      await addDoc(collection(config, "medicae"), {
        displayName: displayName,
        displayLastName: displayLastName,
        email: email,
        password: password,
        confirmEmail: confirmEmail,
        confirmPassword: confirmPassword,
      });
      alert("Informações enviadas com sucesso");

      // Limpa os campos do formulário
      setDisplayName("");
      setDisplayLastName("");
      setEmail("");
      setConfirmEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (e) {
      console.error("Erro ao enviar informações: ", e);
      alert("Erro ao enviar informações. Tente novamente.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Insira seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Sobrenome</span>
          <input
            type="text"
            name="displayLastName"
            required
            placeholder="Insira seu sobrenome"
            value={displayLastName}
            onChange={(e) => setDisplayLastName(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de email</span>
          <input
            type="email"
            name="confirmEmail"
            required
            placeholder="Confirme seu email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
