import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Button from "../Button/Button";
import Form from "./Form";
import { Link } from "react-router-dom";
import {validateNames} from './_utils'

const Menu = ({setShowNav = () => '', player1Name = '', setPlayerName1, player2Name = '', setPlayerName2}) => {
  const [playDisabled, setPlayDisabled] = useState(false);

  useEffect(() => {
    setShowNav(false)
  }, []);

  useEffect(() => {
    if (validateNames(player1Name, player2Name)) {
      setPlayDisabled(false);
    } else {
      setPlayDisabled(true);
    }
  }, [player1Name, player2Name]);

  return (
    <article className={styles.menu}>
      <h1 className={styles.menu__title}>TIC-TAC-TOE</h1>
      <h3 className={styles.menu__subtitle}>MAIN MENU</h3>

      <section className={styles.menu__container}>
        {/* Player Names */}
        <Form inputName="player1" placeholder="Player 1" value={player1Name} setInput={setPlayerName1} />
        <Form inputName="player2" placeholder="Player 2" value={player2Name} setInput={setPlayerName2} />

        {/* Menu Options */}
        <Link to="/game">
          <Button disabled={playDisabled}>PLAY</Button>
        </Link>
        
        <Link to="/leaderboard">
          <Button>LEADERBOARD</Button>
        </Link>
        
      </section>
    </article>
  );
};

export default Menu;
