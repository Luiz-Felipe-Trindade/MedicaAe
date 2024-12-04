import React, { useState } from "react";
import styles from "./DateTimeInput.module.css";

const DateTimeInput = ({ label, placeholder, onChange, value, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="dataHora">{label}</label>
      <input
        className={styles.input}
        type="datetime-local"
        id="dataHora"
        name="dataHora"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default DateTimeInput;
