import livro from "../assets/icons/livro.png";
import styles from "./InfoHome.module.css";
import video from "../assets/icons/video.png";
import { Container } from "./Container";

export const InfoHome = () => {
  return (
    <section className={styles.infoHome}>
      <Container>
        <div className={styles.infoHomeContent}>
          <div>
            <img src={livro} className={styles.livro} alt="book icon"></img>
          </div>
          <div>
            <img src={video} className={styles.video} alt="video icon"></img>
          </div>
          <button className={styles.button}>mas información</button>
        </div>
      </Container>
    </section>
  );
};
