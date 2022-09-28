import React, {useEffect} from "react";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Nav = ({player1Name = '', player2Name = ''}) => {
  
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Button extraClases={[styles.nav__link]}>MENU</Button>
      </Link>
      <Link to="/game">
        <Button extraClases={[styles.nav__link]} disabled={(player1Name && player2Name) ? false : true}>PLAY</Button>
      </Link>
      <Link to="/leaderboard">
        <Button extraClases={[styles.nav__link]}>LEADERBOARD</Button>
      </Link>
    </nav>
  );
};

export default Nav;
