import { FaFilter } from "react-icons/fa";
import { Cards } from "../../../components/Cards/Cards";
import Clock from "../../../components/Clock/Clock";
import MyCalendar from "../../../components/MyCalendar/MyCalendar";
import { NavBar } from "../../../components/NavBar/NavBar";
import styles from "./DashboardPage.module.css";

export const DashboardPage = () => {
  const card = [
    {
      id:1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },{
      id:4,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },{
      id:5,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id:2,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id:3,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    
  ];
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.subcontainer_top}>
          <div className={styles.calendar}>
            <MyCalendar />
          </div>
          <div className={styles.clock}>
            <Clock />
          </div>
        </div>
        <div className={styles.subcontainer_botton}>
          <div className={styles.box_left}>
            <div className={styles.filter_case}>
              <button className={styles.filter}>
                Filtrar
                <FaFilter className={styles.icon} size={13} />
              </button>
            </div>
            <label>Medicamentos administrados</label>
            <div className={styles.iten_box}>
              {card.map((i) => (
                <Cards key={i.id} remedy={i.remedy} dosage={i.dosage} patient={i.patient} action={i.action} time={i.time}/>
              ))}
            </div>
          </div>
          <div className={styles.box_right}>
            <div className={styles.filter_case}>
              <button className={styles.filter}>
                Filtrar <FaFilter className={styles.icon} size={13} />
              </button>
            </div>
            <label>Medicamentos pendentes</label>
            <div className={styles.iten_box}>
              {card.map((i) => (
                <Cards key={i.id} remedy={i.remedy} dosage={i.dosage} patient={i.patient} action={i.action} time={i.time}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
