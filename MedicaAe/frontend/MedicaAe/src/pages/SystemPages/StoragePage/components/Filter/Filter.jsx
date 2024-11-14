import { FaFilter } from "react-icons/fa";
import styles from "./Filter.module.css"
import { useState } from "react";
import { FilterPopUp } from "./FilterPopUp/FilterPopUp";


export const Filter = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  }
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  }

  return (
    <div className={styles.filter_case}>
      <button className={styles.filter} onClick={handleOpenPopUp}>
        Filtrar
        <FaFilter className={styles.icon} size={13} />
      </button>
      {isPopUpOpen && <FilterPopUp onClose={handleClosePopUp} tittle={"Filtrar"}/>}
    </div>
  );
};
