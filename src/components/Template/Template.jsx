import { useAuth } from "../../context/AuthProvider";
import { FooterBar } from "../FooterBar/FooterBar";
import { useEffect } from "react";
import styles from "./Template.module.css";

export const Template = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth();

  return <div className={styles.container}>{children}</div>;
};
