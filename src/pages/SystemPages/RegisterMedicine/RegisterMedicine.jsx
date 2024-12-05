import { useState } from "react";
import styles from "./RegisterMedicine.module.css";
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import { Textarea } from "../../../components/Inputs/Textarea";
import { NavBar } from "../../../components/NavBar/NavBar";
import axios from "axios";

export const RegisterMedicine = () => {
  const [nome, setNome] = useState("");
  const [dose, setDose] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSave = async () => {
    if (!nome || !dose) {
      alert("Nome e dose são obrigatórios!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/medicamento/cadastrar", {
        nome,
        dose,
        descricao,
      });

      if (response.status === 201) {
        alert("Medicamento cadastrado com sucesso!");
        setNome("");
        setDose("");
        setDescricao("");
      }
    } catch (error) {
      console.error("Erro ao cadastrar medicamento:", error);
      alert("Erro ao cadastrar medicamento. Tente novamente.");
    }
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.subpage}>
        <p className={styles.register_tittle}>Cadastrar Medicamento</p>
        <div className={styles.content}>
          <div className={styles.left_box}>
            <div className={styles.InputWithLabel}>
              <InputWithLabel
                label={"Nome do Medicamento"}
                placeholder={"Digite o nome do medicamento"}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputWithLabel
                label={"Dosagem"}
                placeholder={"Digite a dosagem"}
                value={dose}
                onChange={(e) => setDose(e.target.value)}
              />
            </div>

           
          </div>

          <div className={styles.textarea}>
            <Textarea
              tittle={"Descrição (opcional)"}
              placeholder={"Adicione a descrição do medicamento"}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className={styles.button}>
            <button onClick={handleSave} className={styles.save_button}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
