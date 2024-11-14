import { NavBar } from "../../../../components/NavBar/NavBar";
import styles from "./AddToStorePage.module.css";

export const AddToStorePage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}></div>
    </div>
  );
};
