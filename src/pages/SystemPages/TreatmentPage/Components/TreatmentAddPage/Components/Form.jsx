import React, { useState } from "react";
import { InputSelect } from "../../../../../../components/Inputs/InputSelect";
import styles from "./Form.module.css";
import DateTimeInput from "../../../../../../components/Inputs/DateTimeInput";
import { Textarea } from "../../../../../../components/Inputs/Textarea";
import { InputWithLabel } from "../../../../../../components/Inputs/InputWithLabel";
import { TimeInput } from "../../../../../../components/Inputs/TimeInput";
export const Form = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [intervaloIngestao, setIntervaloIngestao] = useState(null);
  const [duracaoTratamento, setDuracaoTratamento] = useState(null);
  const [inicioTratamento, setInicioTratamento] = useState(null);
  const [dosagem, setDosagem] = useState(null);
  const [descricao, setDescricao] = useState(null);

  const Patients = [
    { value: "jorge", label: "Pikaku" },
    { value: "jora", label: "shaolin matador de porco" },
    { value: "cherry", label: "jorgin do pneu" },
  ];
  const Medicines = [
    { value: "jorge", label: "Nimesulida" },
    { value: "jora", label: "Paracetamal" },
    { value: "cherry", label: "Dipironca" },
  ];

  const handleChangePatient = (value) => {
    setSelectedPatient(value);
  };
  const handleChangeMedicine = (value) => {
    setSelectedMedicine(value);
  };
  const handleChangeIntervalo = (value) => {
    setIntervaloIngestao(value);
  };
  const handleChangeDuracao = (value) => {
    setDuracaoTratamento(value);
  };
  const handleChangeInicio = (value) => {
    setInicioTratamento(value);
  };
  const handleChangeDosagem = (value) => {
    setDosagem(value);
  };
  const handleChangeDescricao = (value) => {
    setDescricao(value);
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.tittle}>Cadastrar Tratamento</h2>
      <div className={styles.top}>
        <div className={styles.left}>
          <InputSelect
            label="Selecione o paciente"
            options={Patients}
            value={selectedPatient}
            onChange={handleChangePatient}
            placeholder={"Selecione um paciente"}
          />
        </div>
        <div className={styles.right}>
          <InputSelect
            label="Selecione o medicamento"
            options={Medicines}
            value={selectedMedicine}
            onChange={handleChangeMedicine}
            placeholder={"Selecione um paciente"}
          />
        </div>
      </div>
      <h2>Cronograma</h2>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <DateTimeInput
            label={"Horário do inicio do tratamento"}
            values={inicioTratamento}
            onChange={handleChangeInicio}
          />
          <TimeInput
            label={"Intervalo entre as ingestões do medicamento"}
            value={intervaloIngestao}
            onChange={handleChangeIntervalo}
          />
          <InputWithLabel
            label={"Duração do tratamento"}
            placeholder={"7 dias / 20 dias / 90 dias"}
            value={duracaoTratamento}
            onChange={handleChangeDuracao}
            type={"number"}
          />
          <InputWithLabel
            label={"Dosagem(mg)"}
            placeholder={"Digite a dosagem"}
            type={"number"}
            onChange={handleChangeDosagem}
            value={dosagem}
          />
        </div>
        <div className={styles.right}>
          <Textarea
            tittle={"Descrição/Observação(Opcional)"}
            placeholder={"Adicione a descrição"}
            onChange={handleChangeDescricao}
            value={descricao}
          />
        </div>
      </div>
    </form>
  );
};
