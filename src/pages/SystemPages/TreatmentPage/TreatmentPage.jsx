// styles
import styles from "./TreatmentPage.module.css";

// Components
import { NavBar } from "../../../components/NavBar/NavBar";
import { SearchInput } from "../../../components/Inputs/SearchInput";
import { Cards } from "./Components/Cards/Cards";

export const TreatmentPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const card = [
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 4,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 5,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 2,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
    {
      id: 3,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Em andamento",
      time: "17:30",
    },
  ];
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.container}>
          <SearchInput
            placeholder={"Pesquise por um paciente"}
            onSubmit={handleSubmit}
          />
          <label>Lista de Pacientes</label>
          <div className={styles.patients_list}>
            {card.map((i) => (
              <Cards
                key={i.id}
                remedy={i.remedy}
                dosage={i.dosage}
                patient={i.patient}
                action={i.action}
                time={i.time}
              />
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <SearchInput
            placeholder={"Pesquise por um tratamento"}
            onSubmit={handleSubmit}
          />
          <label>Tratamentos em andamento</label>
          <div className={styles.patients_list}>
            {card.map((i) => (
              <Cards
                key={i.id}
                remedy={i.remedy}
                dosage={i.dosage}
                patient={i.patient}
                action={i.action}
                time={i.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
