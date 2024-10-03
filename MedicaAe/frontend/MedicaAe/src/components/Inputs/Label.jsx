import React from "react";
import styles from "./Label.module.css";

export const Label = ({ children }) => {
  return <label className={styles.label_style}>{children}</label>;
};
