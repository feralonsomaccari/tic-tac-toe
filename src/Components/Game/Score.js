import React from "react";
import styles from "./Game.module.css";

const Score = ({ player1Name, player1Score, player2Name, player2Score, tieScore }) => {
  return (
    <section className={styles.game__score}>
      <p className={styles.game__player}>
        <span>PLAYER 1 ({player1Name})</span>
        <span>{player1Score}</span>
      </p>
      <p className={styles.game__player}>
        <span>TIE </span>
        <span>{tieScore}</span>
      </p>
      <p className={styles.game__player}>
        <span>PLAYER 2 ({player2Name})</span>
        <span>{player2Score}</span>
      </p>
    </section>
  );
};

export default Score;
