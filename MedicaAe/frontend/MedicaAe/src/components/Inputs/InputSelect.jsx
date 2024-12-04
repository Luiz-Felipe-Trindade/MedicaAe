import React, { useState } from "react";
import styles from "./InputSelect.module.css";

export const InputSelect = ({
  placeholder,
  options,
  value,
  onChange,
  label,
  ...rest
}) => {
  return (
    <div className={styles.select_container}>
      <label clasname={styles.label} htmlFor="select">
        {label}
      </label>
      <select
        id="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
        placeholder={placeholder}
      >
        {options.map((option, index) => (
          <option className={styles.option} key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
