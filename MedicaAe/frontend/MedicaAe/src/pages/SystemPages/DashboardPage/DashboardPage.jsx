import { Cards } from "./components/Cards/Cards";
import Clock from "../../../components/Clock/Clock";
import { MyCalendar } from "../../../components/MyCalendar/MyCalendar";
import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";

import styles from "./DashboardPage.module.css";
import { useState } from "react";
export const DashboardPage = () => {
  const card = [
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 4,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 5,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 2,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 3,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.subcontainer_top}>
          <div className={styles.calendar}>
            <MyCalendar onSelectedDate={handleSelectedDate} />
          </div>
          <div className={styles.clock}>
            <Clock />
          </div>
        </div>
        <div className={styles.subcontainer_botton}>
          <div className={styles.box_left}>
            <Filter />
            <label>Medicamentos administrados</label>
            <div className={styles.iten_box}>
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
          <div className={styles.box_right}>
            <Filter />
            <label>Medicamentos pendentes</label>
            <div className={styles.iten_box}>
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
    </div>
  );
};
