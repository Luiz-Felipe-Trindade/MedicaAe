import styles from "./RegisterMedicine.module.css";

import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import { Textarea } from "../../../components/Inputs/Textarea";
import { NavBar } from "../../../components/NavBar/NavBar";

export const RegisterMedicine = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.subpage}>
        <p className={styles.register_tittle}>Cadastrar Medicamento</p>
        <div className={styles.content}>
          <div className={styles.left_box}>
            <form className={styles.inputs}>
              <div className={styles.InputWithLabel}>
                <InputWithLabel
                  label={"Indicação"}
                  placeholder={"Digite o nome do medicamento"}
                />

                <InputWithLabel
                  label={"Dosagem"}
                  placeholder={"Digite a dosagem"}
                />
              </div>
            </form>
          </div>
          <div className={styles.textarea}>
            <Textarea
              tittle={"Descrição (opcional)"}
              placeholder={"Adicione a descrição do medicamento"}
            />
          </div>
          <div className={styles.button}>
            <button className={styles.save_button}> Salvar </button>
          </div>
        </div>
      </div>
    </div>
  );
};
