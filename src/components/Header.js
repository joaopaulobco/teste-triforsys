import { Container } from './Container'
import { Navbar } from './Navbar'
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Navbar/>
            </Container>
        </header>
    )
}