import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GameProvider } from "../../GameContext";
import Game from "./Game";
import Nav from "../Nav/Nav";

const gameComponent = (
  <GameProvider>
    <Router>
      <Game player1Name="Felipe" player2Name="Pedro" />
    </Router>
  </GameProvider>
);

describe("<Game/>", () => {
  it("should render <Game/> component", () => {
    render(gameComponent);
  });

  it("should give 1 points to Felipe", () => {
    render(gameComponent);

    const buttonsEl = screen.getAllByRole("button");
    /* Simulate X victory */
    fireEvent.click(buttonsEl[1])
    fireEvent.click(buttonsEl[2])
    fireEvent.click(buttonsEl[4])
    fireEvent.click(buttonsEl[5])
    fireEvent.click(buttonsEl[7])
    const player1Score = screen.getByTestId("player1-score");
    expect(player1Score.textContent).toBe("1");
  });

  it("should give 1 points to Pedro", () => {
    render(gameComponent);

    const buttonsEl = screen.getAllByRole("button");
    /* Simulate O victory */
    fireEvent.click(buttonsEl[1])
    fireEvent.click(buttonsEl[2])
    fireEvent.click(buttonsEl[4])
    fireEvent.click(buttonsEl[5])
    fireEvent.click(buttonsEl[3])
    fireEvent.click(buttonsEl[8])
    const player1Score = screen.getByTestId("player2-score");
    expect(player1Score.textContent).toBe("1");
  });

  it("should give 1 points to Tie", () => {
    render(gameComponent);

    const buttonsEl = screen.getAllByRole("button");
    /* Simulate TIE */
    fireEvent.click(buttonsEl[1])
    fireEvent.click(buttonsEl[2])
    fireEvent.click(buttonsEl[4])
    fireEvent.click(buttonsEl[5])
    fireEvent.click(buttonsEl[8])
    fireEvent.click(buttonsEl[7])
    fireEvent.click(buttonsEl[3])
    fireEvent.click(buttonsEl[0])
    fireEvent.click(buttonsEl[6])
    const player1Score = screen.getByTestId("tie-score");
    expect(player1Score.textContent).toBe("1");
  });

  it("should SWAP players mark after restarting game if 'O' player wins", () => {
    render((
        <GameProvider>
          <Router>
            <Nav/>
            <Game player1Name="Felipe" player2Name="Pedro" />
          </Router>
        </GameProvider>
      ));

    const buttonsEl = screen.getAllByRole("button");
    /* Simulate O victory */
    fireEvent.click(buttonsEl[1])
    fireEvent.click(buttonsEl[2])
    fireEvent.click(buttonsEl[4])
    fireEvent.click(buttonsEl[5])
    fireEvent.click(buttonsEl[3])
    fireEvent.click(buttonsEl[8])

    const menuBoard = screen.getByText("MENU");
    fireEvent.click(menuBoard);

    const playButton = screen.getByText("PLAY");
    fireEvent.click(playButton);

    const player2 = screen.getByText("Felipe");

    expect(player2.querySelector('span').textContent).toBe('(X)')
  });

});


