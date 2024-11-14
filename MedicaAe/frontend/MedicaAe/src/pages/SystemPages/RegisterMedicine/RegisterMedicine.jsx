import styles from "./RegisterMedicine.module.css";

import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import { Input } from "../../../components/Inputs/Input";
import { NavBar } from "../../../components/NavBar/NavBar";

export const RegisterMedicine = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.subcontainer}>
            <h1 className={styles.RegisterMedicine_title}> Cadastrar medicamento </h1>
            <form onSubmit={handleSubmit}>
          <InputWithLabel label={"Indicação"} placeholder={"Digite o nome do medicamento"} />

          <InputWithLabel label={"Dosagem"} placeholder={"Digite a dosagem"} />

          <InputWithLabel label={"Descrição (opcional)"} placeholder={"Adicione a descrição"} />
        </form>
        <button submit className={styles.save_button}>
          Salvar
        </button>
        </div>
    </div>
  )
}
