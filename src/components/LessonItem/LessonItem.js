import styles from "./LessonItem.module.css";
export const LessonItem = ({ item, lessonNumber }) => {
  return (
    <ul>
      <li className={styles.lessonItem}>
        <div className={styles.lessonNumber}>
          {String(lessonNumber).padStart(2, "0")}
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </li>
    </ul>
  );
};

// <div>{String(test).padStart(2, '0')}</div>
