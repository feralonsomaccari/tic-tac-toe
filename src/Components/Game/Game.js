import React, { useState } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Score from "./Score";

const Game = ({ player1Name = "", player2Name = "" }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  return (
    <article className={styles.game}>
      {/* Score Section */}
      <Score
        player1Name={player1Name}
        player1Score={player1Score}
        player2Name={player2Name}
        player2Score={player2Score}
        tieScore={tieScore}
      />
      
      {/* Tic tac toe Board */}
      <Board />
    </article>
  );
};

export default Game;
