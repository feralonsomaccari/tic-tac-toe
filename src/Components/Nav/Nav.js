import React from "react";
import styles from 'Nav.module.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <button>Menu</button>
      </Link>
      <Link to="/gamehistoryboard">
        <button>Game History</button>
      </Link>
    </nav>
  );
};

export default Nav;
