import styles from "./LessonList.module.css";
import { LessonItem } from "../LessonItem/LessonItem";
export const LessonList = ({ itens }) => {
  return (
    <div className={styles.lessonList}>
      {itens.map((item, index) => {
        return <LessonItem item={item} lessonNumber={index + 1} />;
      })}
      <div className={styles.lessonListButton}>
        <button>ver todos</button>
      </div>
    </div>
  );
};
