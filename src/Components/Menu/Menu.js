import React, { useState } from "react";
import styles from "./Menu.module.css";

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <article className={styles.menu}>
      <h1 className={styles.menu__title}>TIC-TAC-TOE</h1>

      <h3 className={styles.menu__subtitle}>MAIN MENU</h3>

      <section className={styles.menu__container}>
        <div className={styles.menu__form}>
          <label for="player1">Player 1</label>
          <input id="player1" onChange={(e) => setPlayer1(e)}></input>
        </div>
        <div className={styles.menu__form}>
          <label for="player2">Player 2</label>
          <input id="player2" onChange={(e) => setPlayer2(e)}></input>
        </div>

        <button className={`${styles.menu__button} ${styles['menu__boton--disabled']}`}>PLAY</button>
        <button className={styles.menu__button}>LEADERBOARD</button>
      </section>
    </article>
  );
};

export default Home;
