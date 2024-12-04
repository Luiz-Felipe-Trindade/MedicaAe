import React from "react";
import InputMask from "react-input-mask"; // Biblioteca para máscara de CPF
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";

function InputCpf({ value, onChange }) {
  return (
    <div>
      <InputMask
        id="cpf"
        mask="999.999.999-99"
        value={value}
        onChange={onChange}
        maskChar={null}
      >
        {(inputProps) => (
          <InputWithLabel
            {...inputProps}
            label={"CPF"}
            placeholder="Digite seu CPF"
          />
        )}
      </InputMask>
    </div>
  );
}

export default InputCpf;
