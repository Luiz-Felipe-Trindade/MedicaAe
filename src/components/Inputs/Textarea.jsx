import styles from "./Textarea.module.css";
export const Textarea = ({ tittle, defaultValue, placeholder }) => {
  return (
    <div className={styles.textarea}>
      <label>{tittle}</label>
      <textarea
        defaultValue={defaultValue}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
