import { Container } from "../Container";
import styles from "./LessonPlan.module.css";
import { LessonList } from "../LessonList/LessonList";
export const LessonPlan = () => {
  const lessonPlanContent = [
    {
      title: "presentación",
      text: "Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.",
    },
    {
      title: "Natación: aspectos generales",
      text: "Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina",
    },
    {
      title: "bases biomecánicas de la natación",
      text: "Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.",
    },
    {
      title: "estilos de natación",
      text: "Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.",
    },
    {
      title: "virajes y saltos",
    },
  ];
  return (
    <section className={styles.lessonPlan}>
      <Container>
        <div className={styles.title}>
          <h3>lesson Plan</h3>
        </div>

        <LessonList itens={lessonPlanContent} />
      </Container>
    </section>
  );
};
