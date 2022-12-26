import livro from '../assets/icons/livro.png'
import styles from "./SecondSection.module.css";
import video from '../assets/icons/video.png'

export const SecondSection =() => {
    return (
        <div className={styles.second}>
           <div> <img src={livro} className={styles.livro} alt="book icon"></img> </div>
           <div> <img src={video} className={styles.video} alt="video icon"></img> </div>
           <button className={styles.button}>mas información</button>

        </div>
    )
}