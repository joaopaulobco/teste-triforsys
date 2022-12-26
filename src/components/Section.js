import { Container } from "./Container"
import { FirstSection } from "./FirstSection"
import styles from "./Section.module.css"
export const Section = () => {
    return (
        <div className={styles.section}>
            <Container>
                <FirstSection/>
            </Container>
        </div>
    )
}