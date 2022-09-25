import React from "react";
import { render, screen } from "@testing-library/react";

import Score from "./Score";

describe("<Score/>", () => {
  it("should render Score component", () => {
    render(<Score />);
  });

  it("score values should be 0", () => {
    render(<Score />);
    const player1Score = screen.getByTestId("player1-score");
    expect(player1Score.textContent).toBe("0");

    const tieScore = screen.getByTestId("tie-score");
    expect(tieScore.textContent).toBe("0");

    const player2Score = screen.getByTestId("player2-score");
    expect(player2Score.textContent).toBe("0");
  });

  it("should render player 1 score and name", () => {
    render(<Score player1Name="Fer" player1Score={5} />);

    const player1Name = screen.getByTestId("player1-name");
    expect(player1Name.textContent).toBe("PLAYER 1 (Fer)");

    const player1Score = screen.getByTestId("player1-score");
    expect(player1Score.textContent).toBe("5");
  });

  it("should render player 2 score and name", () => {
    render(<Score player2Name="Fer" player2Score={5} />);

    const player2Name = screen.getByTestId("player2-name");
    expect(player2Name.textContent).toBe("PLAYER 2 (Fer)");

    const player2Score = screen.getByTestId("player2-score");
    expect(player2Score.textContent).toBe("5");
  });

  it("should render Tie ", () => {
    render(<Score tieScore={5} />);

    const tieScore = screen.getByTestId("tie-score");
    expect(tieScore.textContent).toBe("5");
  });
});
