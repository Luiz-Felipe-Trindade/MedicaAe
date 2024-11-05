import styles from "./StoragePage.module.css";
import { FaFilter } from "react-icons/fa";

    import { NavBar } from "../../../components/NavBar/NavBar";

export const StoragePage = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
        <div className={styles.box}>
            <div className={styles.filter_case}>
              <button className={styles.filter}>
                Filtrar
                <FaFilter className={styles.icon} size={13} />
              </button>
            </div>
            <label>Estoque de madicamentos</label>
            <div className={styles.iten_box}></div>
          </div>
        </div>
        <button className={styles.button}>Adicionar medicamento</button>
    </div>

  )
}
