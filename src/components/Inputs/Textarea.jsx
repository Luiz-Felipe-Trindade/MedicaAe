import styles from "./Textarea.module.css";
export const Textarea = ({ tittle, value, placeholder, onChange }) => {
  return (
    <div className={styles.textarea}>
      <label>{tittle}</label>
      <textarea
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
