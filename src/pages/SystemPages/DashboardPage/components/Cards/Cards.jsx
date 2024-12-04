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
        <CardsPopUp
          onClose={handleClosePopUp}
          tittle={"Visualizar Tratamento"}
        />
      )}
      <div className={styles.infos}>
        <p className={styles.text}>{remedy}</p>
        <p className={styles.text}>{dosage} dose(s)</p>
        <p className={styles.text}>{patient}</p>
      </div>
      <div className={styles.status}>
        <p className={styles.text}>{action}</p>
        <div className={styles.time}>
          <p className={styles.text}>{time}</p>
        </div>
      </div>
      <div className={styles.icon}>
        <IoEye size={25} />
      </div>
    </div>
  );
};
