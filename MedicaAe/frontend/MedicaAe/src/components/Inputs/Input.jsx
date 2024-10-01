import React from "react";
import styles from "./Input.module.css";

export const Input = ({ type = "text", ...rest }) => {
  return <input className={styles.input_style} type={type} {...rest} />;
};
