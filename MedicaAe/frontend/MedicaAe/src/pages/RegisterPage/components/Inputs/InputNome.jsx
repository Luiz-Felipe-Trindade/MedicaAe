import React from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputNome({ value, onChange }) {
  return (
    <div>
      <InputWithLabel
        label={"Nome Completo"}
        id="nome"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite seu nome completo"
      />
    </div>
  );
}

export default InputNome;
