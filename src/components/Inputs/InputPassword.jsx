import React, { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";

export const InputPassword = () => {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Função para validar a senha
  const validarSenha = (senha) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return regex.test(senha);
  };

  // Função que lida com a mudança de valor da senha
  const handleChange = (event) => {
    const novaSenha = event.target.value;

    // Atualiza o valor da senha no estado
    setSenha(novaSenha);

    // Verifica se a senha atende aos requisitos
    if (novaSenha.length > 0 && !validarSenha(novaSenha)) {
      setErro(
        "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos."
      );
    } else {
      setErro("");
    }
  };

  return (
    <div>
      <InputWithLabel
        label={"Senha"}
        type="password"
        value={senha}
        onChange={handleChange}
        placeholder="Digite sua senha"
        maxLength={20}
      />

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
};
