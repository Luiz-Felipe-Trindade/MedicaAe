import React from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputConfirmacaoEmail({ value, onChange }) {
  return (
    <div>
      <InputWithLabel
        label={"Confirme seu email"}
        id="confirmacao-email"
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Confirme seu email"
      />
    </div>
  );
}

export default InputConfirmacaoEmail;
