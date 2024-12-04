import React from "react";
import styles from "./IconsBar.module.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export const IconsBar = () => {
  return (
    <li className={styles.container}>
      <ul>
        <FaFacebook color="#135359" size={25} />
      </ul>
      <ul>
        <FaLinkedin color="#135359" size={25} />
      </ul>
      <ul>
        <FaYoutube color="#135359" size={25} />
      </ul>
      <ul>
        <FaInstagram color="#135359" size={25} />
      </ul>
    </li>
  );
};
