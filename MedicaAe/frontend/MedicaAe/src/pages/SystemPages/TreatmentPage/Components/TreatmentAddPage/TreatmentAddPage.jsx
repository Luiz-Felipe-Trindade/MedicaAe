import styles from "./TreatmentAddPage.module.css";
import { NavBar } from "../../../../../components/NavBar/NavBar";
import { Form } from "./Components/Form";

export const TreatmentAddPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.left_box}>
          <div className={styles.patient}>
            <Form />
          </div>
          <div></div>
        </div>
        <div className={styles.middle_box}></div>
        <div className={styles.right_box}></div>
      </div>
    </div>
  );
};
