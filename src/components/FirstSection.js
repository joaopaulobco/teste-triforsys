import { Container } from "./Container";
import Hero from "../assets/images/Hero.png";
import styles from "./FirstSection.module.css";
export const FirstSection = () => {
  return (
    <Container>
      <div className={styles.all}>

        <img src={Hero} className={styles.img}></img>
        <div className={styles.mireia}>mireia belmonte</div>
        <div className={styles.ensina}>enseña natación</div>
      </div>
      </Container>
  );
};
