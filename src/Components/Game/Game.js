import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Score from "./Score";
import { useContext } from "react";
import GameContext from "../../GameContext";
import { Navigate } from 'react-router-dom';

const Game = ({ player1Name = "", player2Name = "", setShowNav = () => '' }) => {
  const [player1Mark, setPlayer1Mark] = useState("X");
  const [player2Mark, setPlayer2Mark] = useState("O");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  const { gameHistory, addToGameHistory } = useContext(GameContext);

  const playScoreAnim = (scoreEl) => {
    scoreEl.classList.remove([styles['score-anim']]);
    setTimeout(() => {
      scoreEl.classList.add(styles['score-anim']);
    }, 0);
  }

  const updateHistory = (winnerMark) => {
    addToGameHistory({
      player1: player1Name,
      player2: player2Name,
      winner: winnerMark ? (player1Mark === winnerMark ? player1Name : player2Name) : 'TIE',
      winnerMark: winnerMark,
    });
    if(!winnerMark) {
      playScoreAnim(document.querySelector('#tie-score'))
      return setTieScore(score => score + 1)
    }
    if(player1Mark === winnerMark) {
      playScoreAnim(document.querySelector('#player1-score'))
      setPlayer1Score(score => score + 1)
    }else{
      playScoreAnim(document.querySelector('#player2-score'))
      setPlayer2Score(score => score + 1)
    }
  }

  const swapPlayersMark = () => {
    const temp1 = player1Mark;
    const temp2 = player2Mark;
    setPlayer1Mark(temp2);
    setPlayer2Mark(temp1);
  };
 
  /* Check Game's history */
  useEffect(() => {
    if (gameHistory.length) {
      const playersMatches = gameHistory.filter((game) => game.player1.toUpperCase() === player1Name.toUpperCase()).filter((game) => game.player2.toUpperCase() === player2Name.toUpperCase());
      if(playersMatches){
        const player1HistoryScore = playersMatches.filter(game => game.winner.toUpperCase() === player1Name.toUpperCase()) 
        const player2HistoryScore = playersMatches.filter(game => game.winner.toUpperCase() === player2Name.toUpperCase()) 
        const TieHistoryScore = playersMatches.filter(game => game.winner === 'TIE') 
        setPlayer1Score(player1HistoryScore.length)
        setPlayer2Score(player2HistoryScore.length)
        setTieScore(TieHistoryScore.length)
        const lastGame = playersMatches.reverse()[0];
        if (lastGame?.winner === player2Name) {
          swapPlayersMark();
        }
      }
    }
  }, []);

  useEffect(() => {
    setShowNav(true)
  }, []);

  /* Game view should not be accesible if there are no players */
  if(!player1Name || !player2Name){
    return <Navigate to="/" />
  }

  return (
    <article className={styles.game}>
      {/* Score Section */}
      <Score
        player1Name={player1Name}
        player1Score={player1Score}
        player2Name={player2Name}
        player2Score={player2Score}
        tieScore={tieScore}
        player1Mark={player1Mark}
        player2Mark={player2Mark}
      />

      {/* Tic tac toe Board */}
      <Board updateHistory={updateHistory} />
    </article>
  );
};

export default Game;
