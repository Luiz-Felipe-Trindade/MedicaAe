import { NavBar } from "../../../components/NavBar/NavBar";
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";
import { Input } from "../../../components/Inputs/Input";

// Icons
import { MdOutlineAddCircleOutline } from "react-icons/md";

import styles from "./ConfigPage.module.css";

export const ConfigPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.subcontainer}>
        <h2 className={styles.config_tittle}>Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <InputWithLabel label={"Usuário"} placeholder={"@username123"} />

          <InputWithLabel label={"E-mail"} placeholder={"email@domain.com"} />

          <InputWithLabel label={"Lorem"} placeholder={"Lorem"} />
          <InputWithLabel placeholder={"Lorem"} />
          <InputWithLabel placeholder={"Lorem"} />
        </form>
        <button className={styles.add_button}>
          <MdOutlineAddCircleOutline size={23} />
          <p>Lorem</p>
        </button>
        <button submit className={styles.save_btn}>
          Salvar Mudanças
        </button>
      </div>
    </div>
  );
};
