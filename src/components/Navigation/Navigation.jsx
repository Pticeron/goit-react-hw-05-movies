import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
