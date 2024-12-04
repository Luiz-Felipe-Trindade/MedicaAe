import styles from "./AddPatientsPage.module.css";
import { NavBar } from "../../../../components/NavBar/NavBar";

import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";
import { Textarea } from "../../../../components/Inputs/Textarea";
import { InputCpfMask } from "../../../../components/Inputs/InputCpfMask";

export const AddPatientsPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <form className={styles.inputs}>
          <div className={styles.input_with_label}>
            <div className={styles.input_left}>
              <InputWithLabel label={"Nome"} placeholder={"Jane"} />
              <InputWithLabel label={"Sobrenome"} placeholder={"Smitherton"} />
            </div>
            <div className={styles.input_right}>
              <InputCpfMask />
              <InputWithLabel
                label={"Contato de Emergência"}
                placeholder={"(00) 9 0000-0000"}
              />
            </div>
          </div>
          <div className={styles.radios}>
            <div className={styles.status} id="status">
              <label htmlFor="status">Status de Alta</label>
              <div>
                <div>
                  <input type="radio" name="status" id="1" />
                  <label htmlFor="1">Sim</label>
                </div>
                <div>
                  <input type="radio" name="status" id="0" />
                  <label htmlFor="0">Não</label>
                </div>
              </div>
            </div>
            <div className={styles.radios}>
              <div className={styles.gender} id="gender">
                <label htmlFor="gender">Gênero</label>
                <div>
                  <div>
                    <input type="radio" name="gender" id="men" />
                    <label htmlFor="men">Masculino</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" id="wom" />
                    <label htmlFor="wom">Feminino</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.alergia}>
            <InputWithLabel
              label={"Alergias"}
              placeholder={"Digite a alergia"}
            />
          </div>
          <div className={styles.textarea}>
            <Textarea
              tittle={"Observações adicionais(opcional)"}
              placeholder={"Digite informações adicionais sobre o paciente"}
            />
          </div>
        </form>
        <div className={styles.save}>
          <button className={styles.save_button}>Salvar</button>
        </div>
      </div>
    </div>
  );
};
