import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Button from "./Button";
import Form from "./Form";

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
        {/* Player Names */}
        <Form inputName="player1" placeholder="Player 1" setInput={setPlayer1} />
        <Form inputName="player2" placeholder="Player 2" setInput={setPlayer2} />

        {/* Menu Options */}
        <Button disabled={playDisabled}>PLAY</Button>
        <Button>LEADERBOARD</Button>
      </section>
    </article>
  );
};

export default Home;
