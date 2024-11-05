// Components
import { TinyHomeNavbar } from "../../components/TinyHomeNavbar/TinyHomeNavbar";
import { IconsBar } from "../../components/IconsBar/IconsBar";
// Styles 
import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>

          <TinyHomeNavbar />

          <div className={styles.subcontainer}>
            <div className={styles.top}>
              <h1>Sobre</h1>
              <h3>Um pouco sobre nós e o que fazemos</h3>
            </div>
            <div className={styles.fp}>
              <p>
                O MedicAê é uma plataforma dedicada ao controle eficiente de
                tratamentos medicamentosos, com o objetivo de otimizar a gestão
                de grandes grupos de pacientes. Nosso sistema envia alertas
                precisos para os gestores, informando o momento exato em que
                cada paciente deve ingerir seus medicamentos, além de destacar
                quais pacientes estão envolvidos. O grande diferencial do
                MedicAê é seu gerenciamento de estoque integrado, que garante o
                controle preciso e atualizado dos medicamentos disponíveis,
                evitando faltas ou desperdícios.
              </p>
            </div>
          </div>
          <div className={styles.sp}>
            <p>
              Nossa missão é facilitar o trabalho de instituições que cuidam de
              pessoas que necessitam de tratamentos contínuos, como centros de
              cuidados a idosos e asilos. O projeto nasceu da demanda familiar
              de nossos fundadores, que, como estudantes universitários, viram a
              oportunidade de aplicar seu conhecimento tecnológico para ajudar
              na gestão dessas instituições. Hoje, o MedicAê é resultado de
              dedicação e inovação, com uma equipe jovem e motivada para
              transformar o cuidado com a saúde em algo mais simples e
              eficiente.
            </p>
          </div>
          <div className={styles.icons}>
            <IconsBar />
          </div>
        </div>
      </div>
    </>
  );
};
