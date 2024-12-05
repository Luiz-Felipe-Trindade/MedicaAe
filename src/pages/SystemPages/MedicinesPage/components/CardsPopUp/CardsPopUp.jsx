import React, { useEffect, useState } from "react";
import axios from "axios";
import { PopUp } from "../../../../../components/PopUp/PopUp";
import { InputWithLabel } from "../../../../../components/Inputs/InputWithLabel";
import styles from "./CardsPopUp.module.css";
import { Textarea } from "../../../../../components/Inputs/Textarea";

export const CardsPopUp = ({ onClose, tittle, medicies }) => {
  const [formData, setFormData] = useState({
    nome: medicies.name || '',
    descricao: medicies.description || '',
    dose: medicies.dosage || '',
    indicacao: medicies.indication || ''
  });

  useEffect(() => {
    setFormData({
      nome: medicies.name || '',
      descricao: medicies.description || '',
      dose: medicies.dosage || '',
      indicacao: medicies.indication || ''
    });
  }, [medicies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/medicamento/${medicies.id}`, 
        {
          nome: formData.nome,
          descricao: formData.descricao,
          dose: formData.dose,
          indicacao: formData.indicacao
        }
      );
      console.log('Medicamento atualizado', response.data);
      alert("Medicamento atualizado com sucesso");
      onClose(); 
      
    } catch (error) {
      console.error('Erro ao atualizar medicamento:', error);
    }
  };

  return (
    <PopUp onClose={onClose} onSave={handleSubmit} tittle={tittle}>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div className={styles.content_column}>
          <InputWithLabel
            label={"Nome"}
            name="nome" 
            value={formData.nome} 
            onChange={handleChange}
          />
          <Textarea
            tittle={"Descrição"}
            name="descricao" 
            value={formData.descricao} 
            onChange={handleChange}
          />
        </div>
        <div className={styles.content_column}>
          <InputWithLabel
            label={"Dosagem"}
            name="dose" 
            value={formData.dose} 
            onChange={handleChange}
          />
        </div>

        <div className={styles.content_column}>
          <InputWithLabel
            label={"Indicação"}
            name="indicacao" 
            value={formData.indicacao} 
            onChange={handleChange}
          />
        </div>
      </form>
    </PopUp>
  );
};
