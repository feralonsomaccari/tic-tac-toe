import React from "react";
import styles from "./Game.module.css";

const Score = ({ player1Name = '', player1Score = 0, player2Name = '', player2Score = 0, tieScore = 0, player1Mark, player2Mark }) => {
  return (
    <section className={styles.game__score}>
      <p className={styles.game__player} >
        <span data-testid='player1-name'>{player1Name} <span className={styles[player1Mark]}>({player1Mark})</span></span>
        <span data-testid='player1-score' id='player1-score'>{player1Score}</span>
      </p>
      <p className={styles.game__player} >
        <span>TIE </span>
        <span data-testid='tie-score' id='tie-score'>{tieScore}</span>
      </p>
      <p className={styles.game__player} >
        <span data-testid='player2-name'>{player2Name} <span className={styles[player2Mark]}>({player2Mark})</span></span>
        <span data-testid='player2-score' id='player2-score'>{player2Score}</span>
      </p>
    </section>
  );
};

export default Score;
