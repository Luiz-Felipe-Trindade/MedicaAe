import React from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputConfirmacaoSenha({ value, onChange }) {
  return (
    <div>
      <InputWithLabel
        label={"Confirme sua senha"}
        id="confirmacao-senha"
        type="password"
        value={value}
        onChange={onChange}
        placeholder="Confirme sua senha"
      />
    </div>
  );
}

export default InputConfirmacaoSenha;
