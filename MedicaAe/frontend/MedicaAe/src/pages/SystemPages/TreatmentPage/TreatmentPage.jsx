// styles
import styles from "./TreatmentPage.module.css";

// Components
import { NavBar } from "../../../components/NavBar/NavBar";
import { SearchInput } from "../../../components/Inputs/SearchInput";
import { Cards } from "./Components/Cards/Cards";
import { NavButton } from "../../../components/Buttons/NavButton/NavButton";

export const TreatmentPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const card = [
    {
      id: 1,
      remedy: "Nimesulida",
      dosage: 100,
      patient: "João Carlos Silva",
      status: "Em andamento",
    },
  ];
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.container}>
          <SearchInput
            placeholder={"Pesquise por tratamento"}
            onSubmit={handleSubmit}
          />
          <label>Todos os tratamentos</label>
          <div className={styles.patients_list}>
            {card.map((i) => (
              <Cards key={i.id} data={i} />
            ))}
          </div>
        </div>
        <div className={styles.button}>
          <NavButton to={"/treatment/add"} name={"Adicionar Tratamento"} />
        </div>
      </div>
    </div>
  );
};
