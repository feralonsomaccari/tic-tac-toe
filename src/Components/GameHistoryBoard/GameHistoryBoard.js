import React from "react";
import styles from "./GameHistoryBoard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";

const GameHistoryBoard = () => {
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
    <div className={styles.gamehistoryboard}>
      <h1>Game History Board</h1>
      <table className={styles.gamehistoryboard__table}>
        <thead className={styles.gamehistoryboard__tablehead}>
          <th>Players</th>
          <th>Winner</th>
          <th>Winner Mark</th>
        </thead>
        <tbody>

          {gameHistory.map((game, index) => {
            return (
              <tr className={styles.gamehistoryboard__element} key={index}>
                <td>{game.player1} vs {game.player2}</td>
                <td>{game.winner}</td>
                <td>{game.winnerMark}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GameHistoryBoard;
