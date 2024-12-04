import { NavBar } from "../../../components/NavBar/NavBar";
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";

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
          <InputWithLabel label={"Nome"} placeholder={"Raimundo Neto"} />

          <InputWithLabel label={"E-mail"} placeholder={"email@domain.com"} />

          <h2>Segurança</h2>

          <InputWithLabel label={"Senha"} placeholder={"********"} />
        </form>
        <button className={styles.save_btn} onSubmit={handleSubmit}>
          Salvar Mudanças
        </button>
      </div>
    </div>
  );
};
