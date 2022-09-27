import React, { useEffect } from "react";
import styles from "./GameHistoryBoard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";

const GameHistoryBoard = ({ setShowNav = () => "" }) => {
  const { gameHistory } = useContext(GameContext);

  useEffect(() => {
    setShowNav(true);
  }, []);

  return (
    <div className={styles.gamehistoryboard}>
      <h1>Game History Board</h1>
      {gameHistory.length && (
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
                  <td>
                    {game.player1} vs {game.player2}
                  </td>
                  <td>{game.winner}</td>
                  <td>{game.winnerMark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GameHistoryBoard;
