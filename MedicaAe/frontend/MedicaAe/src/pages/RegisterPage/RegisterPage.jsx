import React, { useState, useEffect } from "react";
import config from "./configuration";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";


function Banco(){
  const [data, setData] = useState([]);
  const database = getDatabase(config);
  const collectionRef = ref(database, "medicae");

}


const RegisterPage = () => {
  const handleSubmit = (e) => {
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
