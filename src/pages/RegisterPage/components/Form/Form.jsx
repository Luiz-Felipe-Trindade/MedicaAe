import React, { useState } from "react";
import InputNome from "../Inputs/InputNome";
import InputCpf from "../Inputs/InputCpf";
import InputSenha from "../Inputs/InputSenha";
import InputConfirmacaoSenha from "../Inputs/InputConfirmacaoSenha";
import InputEmail from "../Inputs/InputEmail";
import InputConfirmacaoEmail from "../Inputs/InputConfirmacaoEmail";
import styles from "./Form.module.css";
import ErrorPopup from "../../../../components/PopUp/ErrorPopUp";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importando Axios para enviar a requisição

const validarSenha = (senha) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  return regex.test(senha);
};

const validarEmails = (email, confirmacaoEmail) => {
  return email === confirmacaoEmail;
};

const validarCpf = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
};

export const Form = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [email, setEmail] = useState("");
  const [confirmacaoEmail, setConfirmacaoEmail] = useState("");

  const [erros, setErros] = useState({
    nome: "",
    cpf: "",
    senha: "",
    confirmacaoSenha: "",
    email: "",
    confirmacaoEmail: "",
  });

  const [erroPopup, setErroPopup] = useState("");

  const handleNomeChange = (event) => setNome(event.target.value);
  const handleCpfChange = (event) => setCpf(event.target.value);
  const handleSenhaChange = (event) => setSenha(event.target.value);
  const handleConfirmacaoSenhaChange = (event) =>
    setConfirmacaoSenha(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleConfirmacaoEmailChange = (event) =>
    setConfirmacaoEmail(event.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErroPopup("");

    let valid = true;

    let newErros = { ...erros };

    if (!nome) {
      newErros.nome = "Nome é obrigatório.";
      setErroPopup("Nome é obrigatório.");
      valid = false;
    } else {
      newErros.nome = "";
    }

    if (!validarCpf(cpf)) {
      newErros.cpf = "CPF inválido.";
      setErroPopup("CPF inválido.");
      valid = false;
    } else {
      newErros.cpf = "";
    }

    if (!validarSenha(senha)) {
      newErros.senha =
        "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.";
      setErroPopup(
        "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos."
      );
      valid = false;
    } else {
      newErros.senha = "";
    }

    if (senha !== confirmacaoSenha) {
      newErros.confirmacaoSenha = "As senhas não coincidem.";
      setErroPopup("As senhas não coincidem.");
      valid = false;
    } else {
      newErros.confirmacaoSenha = "";
    }

    if (!validarEmails(email, confirmacaoEmail)) {
      newErros.confirmacaoEmail = "Os emails não coincidem.";
      setErroPopup("Os emails não coincidem.");
      valid = false;
    } else {
      newErros.confirmacaoEmail = "";
    }

    if (!email) {
      newErros.email = "Email é obrigatório.";
      setErroPopup("Email é obrigatório.");
      valid = false;
    } else {
      newErros.email = "";
    }

    setErros(newErros);

    // Se todos os campos forem válidos, envia os dados para a API
    if (valid) {
      try {
        // Enviar dados do formulário para a API (POST para /register)
        const response = await axios.post("http://localhost:3000/auth/register", {
          name: nome,
          cpf,
          password: senha,
          email,
        });

        if (response.status === 201) {
          console.log("Cadastro realizado com sucesso!");
          alert("Cadastro realizado com sucesso!");
          navigate("/login");
        }
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        setErroPopup("Erro ao cadastrar. Tente novamente.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputs}>
      <div className={styles.small_input}>
        <InputNome value={nome} onChange={handleNomeChange} erro={erros.nome} />
        <InputCpf value={cpf} onChange={handleCpfChange} erro={erros.cpf} />
      </div>
      <div className={styles.small_input}>
        <InputSenha
          value={senha}
          onChange={handleSenhaChange}
          erro={erros.senha}
        />
        <InputConfirmacaoSenha
          value={confirmacaoSenha}
          onChange={handleConfirmacaoSenhaChange}
          erro={erros.confirmacaoSenha}
        />
      </div>
      <InputEmail
        value={email}
        onChange={handleEmailChange}
        erro={erros.email}
      />
      <InputConfirmacaoEmail
        value={confirmacaoEmail}
        onChange={handleConfirmacaoEmailChange}
        erro={erros.confirmacaoEmail}
      />

      <button type="submit" className={styles.base_button}>
        Cadastrar
      </button>

      <ErrorPopup message={erroPopup} onClose={() => setErroPopup("")} />
    </form>
  );
};
