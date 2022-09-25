import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";
import Square from "./Square";
import {checkVictory} from './_utils'

const BOARD_LAYOUT = [
  null, null, null,
  null, null, null,
  null, null, null,
]

const Board = ({setPlayer1Score = () => '', setPlayer2Score = () => '', setTieScore = () => '', swapPlayersMark = () => '', updateHistory = () => ''}) => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(BOARD_LAYOUT);
  const [isGameOver, setIsGameOver] = useState(false)
  const [gameCounter, setGameCounter] = useState(1)
  const [winningLine, setWinningLine] = useState([])

  const handleSquareClick = (position) => {
    if (currentPlayer === "X") setCurrentPlayer("O");
    if (currentPlayer === "O") setCurrentPlayer("X");
    const updateBoard = [...board];
    updateBoard[position] = currentPlayer
    
    setBoard(updateBoard);
  };

  const handleRestartClick = () => {
    setIsGameOver(false)
    setBoard(BOARD_LAYOUT)
    setCurrentPlayer('X')
    setWinningLine([])
    setGameCounter(counter => counter + 1)
    swapPlayersMark()
  }

  /* Check victory after every move */
  useEffect(() => {
    const checkBoard = () => {
      const isXvictoryLine = checkVictory('X', board);
      const isOvictoryLine = checkVictory('O', board);
      if (isXvictoryLine) {
        setWinningLine(isXvictoryLine)
        updateHistory('X')
        return setIsGameOver(true)
      }
      if (isOvictoryLine) {
        setWinningLine(isOvictoryLine)
        updateHistory('O')
        return setIsGameOver(true)
      }
      if(board.every(value => value !== null)) {
        updateHistory(null)
        return setIsGameOver(true)
      }
    }
    checkBoard()

  }, [board]);

  return (
    <section className={styles.board}>
      {isGameOver && <div className={styles.board__restartOverlay} onClick={handleRestartClick} data-testid="restart-overlay"></div>}
      {
        /* Render 9 squares in the Grid */
        board.map((_, index) => (
          <Square
            key={index}
            position={index}
            handleSquareClick={handleSquareClick}
            currentPlayer={currentPlayer}
            gameCounter={gameCounter}
            isGameOver={isGameOver} 
            winningLine={winningLine}/>
        ))
      }
    </section>
  );
};

export default Board;
