import styles from "./InputCpfMask.module.css";
import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";
import InputMask from "react-input-mask";

export const InputCpfMask = () => {
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState(false);

  const handleChange = (event) => {
    const novoCpf = event.target.value;

    const cpfLimpo = novoCpf.replace(/\D/g, "");

    setCpf(novoCpf);

    if (cpfLimpo.length === 11 && !validate(cpfLimpo)) {
      setErro(true); // CPF inválido
    } else {
      setErro(false); // CPF válido
    }
  };

  return (
    <div>
      <InputMask
        mask="999.999.999-99" // Máscara de CPF
        value={cpf}
        onChange={handleChange}
        maxLength={14}
        maskChar={null} // Remove o caractere de máscara quando o campo está vazio
      >
        {(inputProps) => (
          <InputWithLabel
            {...inputProps}
            placeholder="Digite seu CPF"
            label={"CPF"}
          />
        )}
      </InputMask>

      {erro && <p style={{ color: "red" }}>CPF inválido</p>}
    </div>
  );
};
