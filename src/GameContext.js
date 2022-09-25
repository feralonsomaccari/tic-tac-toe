import { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [player1History, setPlayer1History] = useState([]);
  const [player2History, setPlayer2History] = useState([]);
  const [gameId, setGameId] = useState(1);

  const addToPlayer1History = (game) => {
    setPlayer1History((prevHistory) => [...prevHistory, game]);
  };
  const addToPlayer2History = (game) => {
    setPlayer2History((prevHistory) => [...prevHistory, game]);
  };
  const addToGameId = (game) => {
    setGameId((prevGameId) => prevGameId + 1);
  };

  return (
    <GameContext.Provider
      value={{
        player1History,
        addToPlayer1History,
        player2History,
        addToPlayer2History,
        gameId,
        setGameId
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
