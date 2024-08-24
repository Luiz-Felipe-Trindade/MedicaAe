import { Form } from "./Form/Form";
import styles from "./LoginPage.module.css";
export const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.login}>
          <Form />
        </div>
        <div className="subfooter">
          <div className="info">
            <div className="email"></div>
            <div className="contato"></div>
          </div>
          <div className="text"></div>
        </div>
      </div>
    </>
  );
};
