import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.css"


export const NotFoundPage = () => {
return (
  <div className={styles.container}>

    <h1 className={styles.title}>404 </h1>
     <p className={styles.text}>Ops! parece que algo deu errado</p>

     <NavLink to="/" className={styles.button}>
        Voltar ao início
      </NavLink>
 </div>

);
};