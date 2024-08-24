import { useState, useEffect } from "react";
export const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [displayName, setDisplayName] = useState("");
  const [displayLastName, setDisplayLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
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
            onChange={(e) => {
              setDisplayLastName(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Confirmação de email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Confirme seu email"
            value={confirmEmail}
            onChange={(e) => {
              setConfirmEmail(e.target.value);
            }}
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};
