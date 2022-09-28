import React from "react";
import styles from './Nav.module.css';
import { Link, useLocation} from "react-router-dom";
import Button from "../Button/Button";

const Nav = ({player1Name = '', player2Name = ''}) => {

  const location = useLocation();
  
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Button extraClases={[styles.nav__link]}>MENU</Button>
      </Link>
      <Link to="/game">
        <Button extraClases={[styles.nav__link]} disabled={(location.pathname === '/leaderboard' && (player1Name && player2Name) ? false : true)}>PLAY</Button>
      </Link>
      <Link to="/leaderboard">
        <Button extraClases={[styles.nav__link]} disabled={location.pathname === '/leaderboard'}>LEADERBOARD</Button>
      </Link>
    </nav>
  );
};

export default Nav;
