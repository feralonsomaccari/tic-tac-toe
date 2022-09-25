import React from "react";
import styles from "./GamesHistoryBoard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";

const GamesHistoryBoard = () => {
  const { gameHistory } = useContext(GameContext);

  const dummyObj = {
    player1: "Pedro",
    player2: "Juan",
    winner: "Juan",
    winnerMark: "X",
  };

  gameHistory.push(dummyObj);
  gameHistory.push(dummyObj);
  gameHistory.push(dummyObj);
  gameHistory.push(dummyObj);
  gameHistory.push(dummyObj);
  console.log(gameHistory);

  return (
    <div className={styles.gameshistoryboard}>
      <h1>Games History Board</h1>
      <ul className={styles.gameshistoryboard__list}>
        {gameHistory.map((game) => {
          return (
            <li className={styles.gameshistoryboard__element}>
              <span>{game.player1}</span>
              <span>{game.player2}</span>
              <span>{game.winner}</span>
              <span>{game.winnerMark}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GamesHistoryBoard;
