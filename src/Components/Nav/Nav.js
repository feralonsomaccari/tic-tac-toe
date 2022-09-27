import React from "react";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Button extraClases={[styles.nav__link]}>MENU</Button>
      </Link>
      <Link to="/game">
        <Button extraClases={[styles.nav__link]}>GAME</Button>
      </Link>
      <Link to="/leaderboard">
        <Button extraClases={[styles.nav__link]}>LEADERBOARD</Button>
      </Link>
    </nav>
  );
};

export default Nav;
