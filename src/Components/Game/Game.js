import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Score from "./Score";
import { useContext } from "react";
import GameContext from "../../GameContext";

const Game = ({ player1Name = "", player2Name = "" }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  const { gameHistory, addToGameHistory } = useContext(GameContext);

  const updateHistory = (winnerMark) => {
    addToGameHistory({
      player1: player1Name,
      player2: player2Name,
      winner: winnerMark ? (winnerMark === 'X' ? player1Name : player2Name) : 'TIE',
      winnerMark: winnerMark,
    });
  }
 
  useEffect(() => {
    if (player1Score !== 0) updateHistory('X')
  }, [player1Score]);
  useEffect(() => {
    if (tieScore !== 0) updateHistory('O')
  }, [tieScore]);
  useEffect(() => {
    if (player2Score !== 0) updateHistory(null)
  }, [player2Score]);

  return (
    <article className={styles.game}>
      {/* Score Section */}
      <Score
        player1Name={player1}
        player1Score={player1Score}
        player2Name={player2}
        player2Score={player2Score}
        tieScore={tieScore}
      />

      {/* Tic tac toe Board */}
      <Board
        setPlayer1Score={setPlayer1Score}
        setPlayer2Score={setPlayer2Score}
        setTieScore={setTieScore}
      />
    </article>
  );
};

export default Game;
