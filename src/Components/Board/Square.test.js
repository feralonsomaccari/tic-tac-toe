import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Square from "./Square";

describe("<Square/>", () => {
  it("should render Square component", () => {
    render(<Square />);
  });

  it("should render a 'X' mark", () => {
    render(<Square currentPlayer="X" />);
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(screen.getByText("X")).toBeInTheDocument;
  });

  it("should render a 'O' mark", () => {
    render(<Square currentPlayer="O" />);
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(screen.getByText("O")).toBeInTheDocument;
  });

  it("should render a disabled square after click on it", () => {
    render(<Square currentPlayer="X" />);
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(buttonEl).toBeDisabled;
  });
});
