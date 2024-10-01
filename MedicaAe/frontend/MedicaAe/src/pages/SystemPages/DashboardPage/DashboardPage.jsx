import { NavBar } from "../../../components/NavBar/NavBar";
import MyCalendar from "../../../components/MyCalendar/MyCalendar";
import styles from "./DashboardPage.module.css";
import { FaFilter } from "react-icons/fa";

export const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.subcontainer_top}>
          <div className={styles.calendar}>
            <MyCalendar />
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
            <div className={styles.iten_box}></div>
          </div>
          <div className={styles.box_right}>
            <div className={styles.filter_case}>
              <button className={styles.filter}>
                Filtrar <FaFilter className={styles.icon} size={13} />
              </button>
            </div>
            <label>Medicamentos administrados</label>
            <div className={styles.iten_box}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
