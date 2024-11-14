import { Modal } from "../Modal/Modal";
import styles from "./PopUp.module.css";
import { RiCloseLargeFill } from "react-icons/ri";

export const PopUp = ({ children, onClose, onSave, tittle }) => {
  return (
    <Modal>
      <div className={styles.background}>
        <div className={styles.popup}>
          <div className={styles.top_bar} onClick={(e) => e.stopPropagation()}>
            <label className={styles.tittle}>{tittle}</label>
            <button className={styles.close_button} onClick={onClose}>
              <RiCloseLargeFill size={30} color="#135359" />
            </button>
          </div>
          {children}
          <div className={styles.botton_bar}>
            <button className={styles.save_button} onClick={onSave}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
