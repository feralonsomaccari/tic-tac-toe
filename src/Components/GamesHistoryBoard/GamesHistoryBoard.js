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
      <table className={styles.gameshistoryboard__table}>
        <thead className={styles.gameshistoryboard__tablehead}>
          <th>Players</th>
          <th>Winner</th>
          <th>Winner Mark</th>
        </thead>
        <tbody>

          {gameHistory.map((game, index) => {
            return (
              <tr className={styles.gameshistoryboard__element} key={index}>
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

export default GamesHistoryBoard;
