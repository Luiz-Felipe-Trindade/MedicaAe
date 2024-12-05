import { useState, useEffect } from "react";
import styles from "./CardsPopUp.module.css";

export const CardsPopUp = ({ onClose, tittle, cardData, onSave }) => {
  const [formData, setFormData] = useState(cardData);

  useEffect(() => {
    setFormData(cardData);  // Atualiza os dados do formulário com os dados recebidos
  }, [cardData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Passa o formData e o id_tratamento para o onSave
    onSave(formData);  // Passa os dados atualizados para a função de salvar
    onClose();  // Fecha o pop-up
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2>{tittle}</h2>
        <form onSubmit={handleSave}>
          <div className={styles.inputGroup}>
            <label>Paciente:</label>
            <input
              type="text"
              name="nome_paciente"
              value={formData.nome_paciente}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Medicamento:</label>
            <input
              type="text"
              name="id_medicamento"
              value={formData.id_medicamento}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Dosagem:</label>
            <input
              type="text"
              name="dosagem"
              value={formData.dosagem}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Data Inicial:</label>
            <input
              type="date"
              name="data_inicial"
              value={formData.data_inicial}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Data Final:</label>
            <input
              type="date"
              name="data_final"
              value={formData.data_final}
              onChange={handleChange}
            />
          </div>
          <div className={styles.actions}>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
