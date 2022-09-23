import React from "react";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <article className={styles.game}>

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
