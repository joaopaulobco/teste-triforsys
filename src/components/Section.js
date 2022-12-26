import { Container } from "./Container"
import { FirstSection } from "./FirstSection"
import styles from "./Section.module.css"
import { SecondSection } from "./SecondSection"

export const Section = () => {
    return (
        <div className={styles.section}>
            <Container>
               <div><FirstSection/></div> 
                <div><SecondSection/></div>
            </Container>
        </div>
    )
}