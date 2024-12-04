import React from "react";
import { PopUp } from "../../../../../components/PopUp/PopUp";
import { InputWithLabel } from "../../../../../components/Inputs/InputWithLabel";
import styles from "./CardsPopUp.module.css";
import { Textarea } from "../../../../../components/Inputs/Textarea";
import { InputSwitch } from "../../../../../components/Inputs/InputSwitch";
export const CardsPopUp = ({ onClose, tittle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <PopUp onClose={onClose} onSave={handleSubmit} tittle={tittle}>
      <form className={styles.content}>
        <div className={styles.content_column}>
          <InputWithLabel label={"Paciente"} />
          <InputWithLabel label={"Medicamento Atribuído"} />
          <Textarea tittle={"Descrição"} />
        </div>
        <div className={styles.content_column}>
          <InputWithLabel label={"Dosagem(mg)"} />
          <InputSwitch
            label={"Status do tratamento"}
            whenNotChecked={"Em andamento"}
            whenChecked={"Finalizado"}
          />
        </div>
      </form>
    </PopUp>
  );
};
