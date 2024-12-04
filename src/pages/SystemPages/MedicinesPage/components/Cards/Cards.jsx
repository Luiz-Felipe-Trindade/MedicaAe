import styles from "./Cards.module.css";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { CardsPopUp } from "../CardsPopUp/CardsPopUp";

export const Cards = ({ medicies }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className={styles.container} onClick={handleOpenPopUp}>
      {isPopUpOpen && (
        <CardsPopUp
          onClose={handleClosePopUp}
          tittle={"Editar Medicamento"}
          medicies={medicies}
        />
      )}
      <div className={styles.infos}>
        <p className={styles.text}>Nome: {medicies.name}</p>
        <p className={styles.text}>Dosagem: {medicies.dosage}mg</p>
        <p className={styles.text}>Indicação: {medicies.indication}</p>
      </div>
      <p className={styles.text}>Clique para ver a descrição</p>
      <div className={styles.icon}>
        <IoEye size={25} />
      </div>
    </div>
  );
};
