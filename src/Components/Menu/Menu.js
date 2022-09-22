import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Button from "./Button";

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [playDisabled, setPlayDisabled] = useState(false);

  useEffect(() => {
    if (!player1.length || !player2.length) {
      setPlayDisabled(true);
    } else {
      setPlayDisabled(false);
    }
  }, [player1, player2]);

  return (
    <article className={styles.menu}>
      <h1 className={styles.menu__title}>TIC-TAC-TOE</h1>

      <h3 className={styles.menu__subtitle}>MAIN MENU</h3>

      <section className={styles.menu__container}>
        <div className={styles.menu__form}>
          <label for="player1">Player 1</label>
          <input
            id="player1"
            onChange={(e) => setPlayer1(e.target.value)}
          ></input>
        </div>
        <div className={styles.menu__form}>
          <label for="player2">Player 2</label>
          <input
            id="player2"
            onChange={(e) => setPlayer2(e.target.value)}
          ></input>
        </div>

        <Button disabled={playDisabled}>PLAY</Button>
        <Button>LEADERBOARD</Button>
      </section>
    </article>
  );
};

export default Home;
