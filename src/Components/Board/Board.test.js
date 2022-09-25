import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("<Board/>", () => {
  it("should become Board component", () => {
    render(<Board />);
  });

  it("should render the Grid (9 squares)", () => {
    render(<Board />);
    const buttonEl = screen.getAllByRole("button");
    expect(buttonEl).toHaveLength(9);
  });

  it("should render the Restart Overlay on game over", () => {
    render(<Board />);
    const buttonsEl = screen.getAllByRole("button");
    buttonsEl.forEach((buttonEl) => fireEvent.click(buttonEl));

    const restartOverlay = screen.getByTestId("restart-overlay");
    expect(restartOverlay).toBeInTheDocument();
  });

  it("should restart the Game on Restart Overlay click", () => {
    render(<Board />);
    const buttonsEl = screen.getAllByRole("button");
    buttonsEl.forEach((buttonEl) => fireEvent.click(buttonEl));

    const restartOverlay = screen.getByTestId("restart-overlay");
    fireEvent.click(restartOverlay);

    expect(restartOverlay).not.toBeInTheDocument();
  });
});
