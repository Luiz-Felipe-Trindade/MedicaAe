import styles from "./RegisterMedicine.module.css";

import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import { Textarea } from "../../../components/Inputs/Textarea";
import { NavBar } from "../../../components/NavBar/NavBar";

export const RegisterMedicine = () => {
  return (
    <div className={styles.page}>
        <NavBar/>
        <div className={styles.subpage}>
            <div className={styles.left_box}>
            <h1 className={styles.RegisterMedicine_title}> Cadastrar medicamento </h1>
            <form className={styles.inputs}>
              <div className={styles.InputWithLabel}>
          
              <InputWithLabel label={"Indicação"} placeholder={"Digite o nome do medicamento"} />

              <InputWithLabel label={"Dosagem"} placeholder={"Digite a dosagem"} />
              </div> 
          </form>
          <div className={styles.radios}>
              <div className={styles.type} id="type">
                <label htmlFor="type">Genérico ou Oririnal?</label>
                <div>
                  <div>
                    <input type="radio" name="type" id="generico" />
                    <label htmlFor="generico">Genérico</label>
                  </div>
                  <div>
                    <input type="radio" name="type" id="original" />
                    <label htmlFor="original">Original</label>
                  </div>
                </div>
              </div>
            </div>
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
  )
};
