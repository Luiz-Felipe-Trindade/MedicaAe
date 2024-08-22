import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import styles from "./HomeFooter.module.css";

const HomeFooter = () => {
  return (
    <footer className={styles.footer}>
      <AiFillFacebook />
      <AiFillLinkedin />
      <AiFillYoutube />
      <AiFillInstagram />
    </footer>
  );
};

export default HomeFooter;
