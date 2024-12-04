import React from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputSenha({ value, onChange }) {
  return (
    <div>
      <InputWithLabel
        label={"Senha"}
        id="senha"
        type="password"
        value={value}
        onChange={onChange}
        placeholder="Digite sua senha"
      />
    </div>
  );
}

export default InputSenha;
