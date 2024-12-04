import styles from "./TimeInput.module.css";

export const TimeInput = ({ label, value, onChange, ...rest }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="hora">
        {label}
      </label>
      <input
        type="time"
        id="hora"
        name="hora"
        value={value}
        onChange={onChange}
        className={styles.input}
        {...rest}
      />
    </div>
  );
};
