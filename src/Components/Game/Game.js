import React, { useState } from "react";
import styles from "./Game.module.css";

const Game = ({player1Name = '', player2Name = ''}) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  return (
    <article className={styles.game}>
      {/* Score Section */}

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

      {/* Tic tac toe board */}
      <section className={styles.board}>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
        <div className={styles.board__square}>X</div>
      </section>
    </article>
  );
};

export default Game;
