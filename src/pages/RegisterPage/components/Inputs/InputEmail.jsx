import React from "react";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputEmail({ value, onChange }) {
  return (
    <div>
      <InputWithLabel
        label={"Email"}
        id="email"
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Digite seu email"
      />
    </div>
  );
}

export default InputEmail;
