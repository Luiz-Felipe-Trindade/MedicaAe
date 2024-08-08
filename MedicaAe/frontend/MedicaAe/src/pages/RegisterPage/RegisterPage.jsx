import { useState, useEffect } from "react";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    const [displayName, setDisplayName] = useState("");
    const [displayLastName, setDisplayLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    e.preventDefault();
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
          />
        </label>
        <label>
          <span>Sobrenome</span>
          <input
            type="text"
            name="displayLastName"
            required
            placeholder="Insira seu sobrenome"
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu email"
          />
        </label>
        <label>
          <span>Confirmação de email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Confirme seu email"
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
