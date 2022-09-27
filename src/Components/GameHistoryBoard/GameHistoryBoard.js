import React, { useState, useEffect } from "react";
import styles from "./GameHistoryBoard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";
import Table from "./Table";

const GameHistoryBoard = ({ setShowNav = () => "" }) => {
  const { gameHistory } = useContext(GameContext);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setShowNav(true);

    const players = {};
    gameHistory.forEach((game) => {
      players[game.player1] = { wins: 0 };
      players[game.player2] = { wins: 0 };
      players["TIE"] = { wins: 0 };
    });

    gameHistory.forEach((game) => {
      players[game.winner].wins += 1;
    });
    console.log(gameHistory);
    setLeaderboard(players);
  }, []);

  return (
    <div className={styles.gamehistoryboard}>
      <h1>LEADERBOARD</h1>

      <Table headers={["Players", "Wins"]}>
        {Object.keys(leaderboard).map((player, index) => {
          return (
            <tr className={styles.gamehistoryboard__element} key={`${player}-${index}`}>
              <td>{player}</td>
              <td>{leaderboard[player].wins}</td>
            </tr>
          );
        })}
      </Table>

      <h2>Game History Board</h2>
      {gameHistory.length && (
        <Table headers={["Players", "Winner", "Winner Mark"]}>
          {gameHistory.map((game, index) => {
            return (
              <tr className={styles.gamehistoryboard__element} key={`${game.winner}-${index}`}>
                <td>
                  {game.player1} vs {game.player2}
                </td>
                <td>{game.winner}</td>
                <td>{game.winnerMark}</td>
              </tr>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default GameHistoryBoard;
