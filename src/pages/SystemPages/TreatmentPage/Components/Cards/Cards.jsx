import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cards.module.css";
import { CardsPopUp } from "../CardsPopUp/CardsPopUp";

export const Cards = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [cardData, setCardData] = useState([]); // Inicialize com um array vazio
  const [selectedTreatment, setSelectedTreatment] = useState(null); // Novo estado para armazenar o tratamento selecionado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para formatar a data
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Buscar todos os tratamentos
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/tratamento/all`);
      setCardData(response.data); // Armazena todos os tratamentos no estado
      setLoading(false);
    } catch (err) {
      setError("Erro ao buscar os dados dos tratamentos.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenPopUp = (tratamento) => {
    setSelectedTreatment(tratamento); // Armazena o tratamento selecionado
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
    setSelectedTreatment(null); // Limpa o tratamento selecionado
  };

  const handleUpdateData = async (updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/tratamento/update/${tratamento.id}`,  // Correção aqui
        updatedData  // Dados a serem atualizados
      );
      setCardData((prevData) =>
        prevData.map((tratamento) =>
          tratamento.id_tratamento === updatedData.id_tratamento ? response.data : tratamento
        )
      );
      alert("Tratamento atualizado com sucesso!");
    } catch (err) {
      alert("Erro ao atualizar o tratamento.");
    }
  };
  

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      {isPopUpOpen && (
        <CardsPopUp
          onClose={handleClosePopUp}
          tittle={"Editar Tratamento"}
          cardData={selectedTreatment} // Passando o tratamento selecionado
          onSave={handleUpdateData} // Passando a função de update
        />
      )}

      <div className={styles.columns}>
        {cardData.map((tratamento) => (
          <div
            key={tratamento.id_tratamento}
            className={styles.card}
            onClick={() => handleOpenPopUp(tratamento)} // Passa o tratamento clicado
          >
            <div className={styles.infos}>
              <p className={styles.text}><strong>Paciente:</strong> <span>{tratamento.nome_paciente}</span></p>
              <p className={styles.text}><strong>Medicamento:</strong> <span>{tratamento.id_medicamento}</span></p>
            </div>
            <div className={styles.infos}>
              <p className={styles.text}><strong>Dosagem (mg):</strong> <span>{tratamento.dosagem}</span></p>
              <p className={styles.text}><strong>Intervalo:</strong> <span>{tratamento.intervalo}</span></p>
            </div>
            <div className={styles.infos}>
              <p className={styles.text}><strong>Início do Tratamento:</strong> <span>{formatDate(tratamento.data_inicial)}</span></p>
              <p className={styles.text}><strong>Fim do Tratamento:</strong> <span>{formatDate(tratamento.data_final)}</span></p>
            </div>
            <div className={styles.infos}>
              <p className={styles.text}><strong>Status:</strong> <span>{tratamento.status}</span></p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.icon}>
        <p className={styles.text}>Clique para editar</p>
      </div>
    </div>
  );
};
