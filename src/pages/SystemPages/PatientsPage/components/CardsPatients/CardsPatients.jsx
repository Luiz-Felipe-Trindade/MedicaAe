import styles from "./CardsPatitents.module.css";
import { useState } from "react";
import { IoEye } from "react-icons/io5";

export const CardsPatitens = ({ patitens }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className={styles.container} onClick={handleOpenPopUp}>
      {/* Exibindo o PopUp, se necessário */}
      {isPopUpOpen && (
        <CardsPopUp
          onClose={handleClosePopUp}
          title={"Editar Paciente"}
          patitens={patitens}
        />
      )}

      <div className={styles.infos}>
        <p className={styles.text}>Nome: {patitens.name}</p>
        <p className={styles.text}>Idade: {patitens.idadepaciente}</p>
        <p className={styles.text}>Gênero: {patitens.genero}</p>
        <p className={styles.text}>Número: {patitens.numcontato}</p>
        <p className={styles.text}>CPF: {patitens.cpf}</p>
        <p className={styles.text}>Alergia: {patitens.alergia}</p>
      </div>
      
      <p className={styles.text}>Clique para ver a descrição</p>
      
      <div className={styles.icon}>
        <IoEye size={25} />
      </div>
    </div>
  );
};
