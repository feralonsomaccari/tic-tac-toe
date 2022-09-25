import GameHistoryBoard from "./Components/GameHistoryBoard/GameHistoryBoard";
import Menu from "./Components/Menu/Menu";
import Game from "./Components/Game/Game";
import { GameProvider } from "./GameContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gamehistoryboard" element={<GameHistoryBoard />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
