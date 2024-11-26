import styles from "./Cards.module.css";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { CardsPopUp } from "../CardsPopUp/CardsPopUp";

export const Cards = ({ id, remedy, dosage, patient, action, time }) => {
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
        <CardsPopUp onClose={handleClosePopUp} tittle={"Editar Tratamento"} />
      )}
      <div className={styles.infos}>
        <p className={styles.text}>
          Nome:
          <br />
          {patient}
        </p>
      </div>
      <div className={styles.status}>
        <p className={styles.text}>
          Status: <br />
          {action}
        </p>
        <div className={styles.time}>
          <p className={styles.text}>
            Horário: <br />
            {time}
          </p>
        </div>
      </div>
      <div className={styles.icon}>
        <IoEye size={25} />
      </div>
    </div>
  );
};
