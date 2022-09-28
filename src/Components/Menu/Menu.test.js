import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<Menu/>", () => {
  it("should become Menu component", () => {
    render(<Menu />, {wrapper: Router});
  });

  it("should render player 1 <Form/>", () => {
    render(<Menu />, {wrapper: Router});
    const inputEl = screen.getByPlaceholderText("Player 1");
    expect(inputEl).toBeInTheDocument;
  });

  it("should render player 2 <Form/>", () => {
    render(<Menu />, {wrapper: Router});
    const inputEl = screen.getByPlaceholderText("Player 2");
    expect(inputEl).toBeInTheDocument;
  });

  it("should render two <Button/>", () => {
    render(<Menu />, {wrapper: Router});
    const buttonEl = screen.getAllByRole("button");
    expect(buttonEl).toHaveLength(2);
  });

  it("should enable PLAY button", () => {
    render(<Menu player1Name='Felipe' player2Name='Pedro' />, {wrapper: Router});

    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).not.toHaveClass("button button--disabled");
  });

  it("should disable PLAY button", () => {
    render(<Menu />, {wrapper: Router});
    fireEvent.change(screen.getByPlaceholderText("Player 1"), {
      target: { value: "Felipe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Player 2"), {
      target: { value: "" },
    });

    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).toHaveClass("button button--disabled");
  });
});
