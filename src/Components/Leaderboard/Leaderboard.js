import React, { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import { useContext } from "react";
import GameContext from "../../GameContext";
import Table from "./Table";

const Leaderboard = ({ setShowNav = () => "" }) => {
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
    setLeaderboard(players);
  }, []);

  return (
    <section className={styles.leaderboard}>
      <h1>LEADERBOARD</h1>
      {gameHistory.length ? (
        <>
          <Table headers={["Players", "Wins"]}>
            {Object.keys(leaderboard).map((player, index) => {
              return (
                <tr
                  className={styles.leaderboard__element}
                  key={`${player}-${index}`}
                >
                  <td>{player}</td>
                  <td>{leaderboard[player].wins}</td>
                </tr>
              );
            })}
          </Table>

          <h2>Game History</h2>
          <Table headers={["Players", "Winner", "Winner Mark"]}>
            {gameHistory.map((game, index) => {
              return (
                <tr
                  className={styles.leaderboard__element}
                  key={`${game.winner}-${index}`}
                >
                  <td>
                    {game.player1} vs {game.player2}
                  </td>
                  <td>{game.winner}</td>
                  <td>{game.winnerMark}</td>
                </tr>
              );
            })}
          </Table>
        </>
      ) : (
        <>
          <span>No games has been found</span>
          <span>You will see your games here after you playe some :)</span>
        </>
      )}
    </section>
  );
};

export default Leaderboard;
