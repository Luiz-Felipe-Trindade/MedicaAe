import styles from "./BaseButton.module.css";

export const BaseButton = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};
