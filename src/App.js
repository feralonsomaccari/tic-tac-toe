import React, { useState } from "react";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Menu from "./Components/Menu/Menu";
import Game from "./Components/Game/Game";
import { GameProvider } from "./GameContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [player1Name, setPlayerName1] = useState("");
  const [player2Name, setPlayerName2] = useState("");

  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
            {showNav && <Nav player1Name={player1Name} player2Name={player2Name}></Nav>}
          <Routes>
            <Route path="/" element={<Menu setShowNav={setShowNav} player1Name={player1Name} setPlayerName1={setPlayerName1} player2Name={player2Name} setPlayerName2={setPlayerName2} />} />
            <Route path="/game" element={<Game setShowNav={setShowNav} player1Name={player1Name} player2Name={player2Name} />} />
            <Route path="/leaderboard" element={<Leaderboard setShowNav={setShowNav}/>} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
