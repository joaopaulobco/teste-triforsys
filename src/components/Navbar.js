import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from'../assets/images/LogoUnycos.png'
export const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.home}>
        <Link to="/"><img src={logo} className={styles.imgLogo}></img></Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/cursos">Cursos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/register">Register</Link>
        </li>
        <li className={styles.item}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};


