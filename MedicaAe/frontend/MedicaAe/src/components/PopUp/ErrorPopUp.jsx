import React from "react";
import styles from "./ErrorPopUp.module.css"; // Estilos para o popup de erro

const ErrorPopup = ({ message, onClose }) => {
  if (!message) return null; // Não renderiza o popup se não houver mensagem

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
