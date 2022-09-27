import React, { useState, useEffect } from "react";
import styles from "./GameHistoryBoard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";

const GameHistoryBoard = ({ setShowNav = () => "" }) => {
  const { gameHistory } = useContext(GameContext);
  const [leaderboard, setLeaderboard] = useState([]);
  

  useEffect(() => {
    setShowNav(true);

    const players = {};
    gameHistory.forEach((game) => {
      players[game.player1] = {wins: 0};
      players[game.player2] = {wins: 0};
      players['TIE'] = {wins: 0};
    });

    gameHistory.forEach((game) => {
      console.log(game)
      players[game.winner].wins += 1;
    });

    setLeaderboard(players);
  }, []);

  return (
    <div className={styles.gamehistoryboard}>
      <h1>LEADERBOARD</h1>
      {leaderboard && (
        Object.keys(leaderboard).map(player => {
          return (
            <div>
              <span>{player}: </span>
              <span>{leaderboard[player].wins}</span>
            </div>
          )
        })
      )}
      <h2>Game History Board</h2>
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
