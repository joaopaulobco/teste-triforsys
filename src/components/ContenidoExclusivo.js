import styles from "./ContenidoExclusivo.module.css";
import { Container } from "./Container";
import layer from "../assets/icons/layer.png";
import localization from "../assets/icons/localization.png";
import tests from "../assets/icons/tests.png";
import tasks from "../assets/icons/tasks.png";

export const ContenidoExclusivo = () => {
  return (
    <section className={styles.contenidoExclusivo}>
      <Container>
        <div className={styles.title}>
          <h3>contenido exclusivo</h3>
        </div>
        <div className={styles.iconsContent}>
          <div className={styles.layerIcon}>
            <img src={layer}></img>
            <div className={styles.layerIconText}>e-books</div>
          </div>
          <div className={styles.localizationIcon}>
            <img src={localization}></img>
            <div className={styles.localizationItconText}> 360º videos </div>
          </div>
          <div className={styles.testsIcon}>
            <img src={tests}></img>
            <div className={styles.testsIconText}>tests</div>
          </div>
          <div className={styles.tasksIcon}>
            <img src={tasks}></img>
            <div className={styles.tasksIconText}>tareas</div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.contenidoExclusivoButton}>
            mas información
          </button>
        </div>
      </Container>
    </section>
  );
};
