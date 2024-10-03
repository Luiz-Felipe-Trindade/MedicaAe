import React from "react";
import styles from "./InputWithLabel.module.css";
import { Label } from "./Label";
import { Input } from "./Input";

export const InputWithLabel = ({ label, placeholder, ...rest }) => {
  return (
    <div className={styles.input_box}>
      <Label>{label}</Label>
      <Input placeholder={`${placeholder ?? label}`} {...rest} />
    </div>
  );
};
