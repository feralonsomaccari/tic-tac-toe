import React from "react";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <a className={styles.nav__link}>Menu</a>
      </Link>
      <Link to="/game">
        <a className={styles.nav__link}>Game</a>
      </Link>
      <Link to="/gamehistoryboard">
        <a className={styles.nav__link}>Game History</a>
      </Link>
    </nav>
  );
};

export default Nav;
