import { IconBase } from "react-icons";
import { FooterBar } from "../../components/FooterBar/FooterBar";
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import styles from "./FaqPage.module.css";
import { IconsBar } from "../../components/IconsBar/IconsBar";

export const FaqPage = () => {
  return (
    <div className={styles.container}>
      <TinyHomeNavbar />
      <h1 className={styles.question}>• Qual é a nossa proposta?
      <p>MedicAe é uma plataforma de controle tanto de medicamentos quando de paciêntes idosos, que, por conta de sua idade, requerem um maior cuidado na administração de remédios. O MedicAe visa facilitar esses processos, para que qualquer hospital ou posto de saúde possa utiliza-lo.</p>
        <h1>• É possível programar lembretes de medicação?</h1>
        <p>Sim! Você pode programar lembretes de medicação personalizados para cada paciênte. A plataforma enviará uma mensagem de notificação para o responsável para garantir que os medicamentos sejam entreges ao paciênte na hora certa.</p>
        <h1>•  E se um paciente esquecer de tomar um medicamento?</h1>
        <p>O nosso sistema de lembrete consta com uma enfermeira/responsável, que é encarregada de entregar o medicamento para o paciênte, para que não ocorra situações em que o paciente fique sem seu medicamento.</p>
      </h1>
    </div>
  );
};
