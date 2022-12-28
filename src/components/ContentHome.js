import { Container } from "./Container";
import styles from "./ContentHome.module.css";
import contentImgHome1 from "../assets/images/contentImgHome1.png";
import contentImgHome2 from "../assets/images/contentImgHome2.png";
import contentImgHome3 from "../assets/images/contentImgHome3.png";
import contentImgHome4 from "../assets/images/contentImgHome4.png";

export const ContentHome = () => {
  return (
    <section className={styles.contentHome}>
      <Container>
        <div className={styles.textContainer}>
          <img src={contentImgHome1} alt=""></img>

          <div className={styles.text}>
            <div className={styles.title}>
              <h1>entrenar para el éxito</h1>
            </div>
            <div className={styles.abstract}>
              <p>
                Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
                venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
                euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
                Suspendisse potenti. Nunc faucibus vulputate neque.
              </p>
            </div>
            <div className={styles.imgContent}>
              <div>
                <img src={contentImgHome2} alt=""></img>
                <div className={styles.contentImgHome2Text}>
                  estilos de natación
                </div>
              </div>
              <div className={styles.contentImgHome3}>
                <img src={contentImgHome3} alt=""></img>
                <div className={styles.contentImgHome3Text}>
                  preparación física
                </div>
              </div>
              <div>
                <img src={contentImgHome4} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
