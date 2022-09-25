import React from "react";
import styles from "./Game.module.css";

const Score = ({ player1Name = '', player1Score = 0, player2Name = '', player2Score = 0, tieScore = 0 }) => {
  return (
    <section className={styles.game__score}>
      <p className={styles.game__player} >
        <span data-testid='player1-name'>PLAYER 1 ({player1Name})</span>
        <span data-testid='player1-score'>{player1Score}</span>
      </p>
      <p className={styles.game__player} >
        <span>TIE </span>
        <span data-testid='tie-score'>{tieScore}</span>
      </p>
      <p className={styles.game__player} >
        <span data-testid='player2-name'>PLAYER 2 ({player2Name})</span>
        <span data-testid='player2-score'>{player2Score}</span>
      </p>
    </section>
  );
};

export default Score;
