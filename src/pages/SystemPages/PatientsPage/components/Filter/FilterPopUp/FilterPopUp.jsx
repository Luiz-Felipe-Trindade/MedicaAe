import { PopUp } from "../../../../../../components/PopUp/PopUp";
import styles from "./FilterPopUp.module.css";
import { InputWithLabel } from "../../../../../../components/Inputs/InputWithLabel";

export const FilterPopUp = ({ onClose, tittle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <PopUp onClose={onClose} tittle={tittle} onSave={handleSubmit}>
      <div className={styles.content}>
        <div className={styles.left}>
          <InputWithLabel
            label={"Procurar por nome"}
            placeholder={"Digite o nome de algum medicamento"}
            type={"text"}
          />
        </div>
        <div className={styles.right}>
          <InputWithLabel
            label={"Procurar por indicação"}
            placeholder={"Digite uma indicação"}
            type={"text"}
          />
        </div>
      </div>
    </PopUp>
  );
};
