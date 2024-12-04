import React, { useState, useEffect } from 'react';
import styles from "./Clock.module.css";

const Clock = () => {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    // Função para formatar o horário no formato HH:MM
    const atualizarHorario = () => {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      setHorario(`${horas}:${minutos}`);
    };

    // Atualiza o horário imediatamente ao montar o componente
    atualizarHorario();

    // Define um intervalo para atualizar o relógio a cada minuto
    const intervalo = setInterval(atualizarHorario, 60000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2 className={styles.clock}>{horario}</h2>
    </div>
  );
};

export default Clock;