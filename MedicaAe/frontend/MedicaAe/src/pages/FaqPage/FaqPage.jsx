import { IconBase } from "react-icons";
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import styles from "./FaqPage.module.css";
import { IconsBar } from "../../components/IconsBar/IconsBar";

export const FaqPage = () => {
  return (
    <div className={styles.container}>
      <TinyHomeNavbar />
      <div>FaqPage</div>
    </div>
  );
};
