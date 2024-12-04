import React from "react";
import { PopUp } from "../../../../../components/PopUp/PopUp";
import { InputWithLabel } from "../../../../../components/Inputs/InputWithLabel";
import styles from "./CardsPopUp.module.css";
import { Textarea } from "../../../../../components/Inputs/Textarea";

export const CardsPopUp = ({ onClose, tittle, medicies }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <PopUp onClose={onClose} onSave={handleSubmit} tittle={tittle}>
      <form className={styles.content}>
        <div className={styles.content_column}>
          <InputWithLabel label={"Nome"} defaultValue={medicies.name} />
          <Textarea tittle={"Descrição"} defaultValue={medicies.description} />
        </div>
        <div className={styles.content_column}>
          <InputWithLabel label={"Dosagem"} defaultValue={medicies.dosage} />
        </div>

        <div className={styles.content_column}>
          <InputWithLabel
            label={"Indicação"}
            defaultValue={medicies.indication}
          />
        </div>
      </form>
    </PopUp>
  );
};
