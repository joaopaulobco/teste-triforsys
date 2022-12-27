import { Container } from "./Container";
import Hero from "../assets/images/Hero.png";
import styles from "./BannerHome.module.css";
export const BannerHome = () => {
  return (
    <section className={styles.bannerHome}>
      <Container>
        <img src={Hero} className={styles.img}></img>
        <div className={styles.textContainer}>
          <div className={styles.mireia}>mireia belmonte</div>
          <div className={styles.containerEnsina}>
            <div className={styles.ensina}>enseña</div>
            <div className={styles.natacion}>natación</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
