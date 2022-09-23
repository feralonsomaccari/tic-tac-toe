import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";

describe("<Menu/>", () => {
  it("should become Menu component", () => {
    render(<Menu />);
  });

  it("should render player 1 <Form/>", () => {
    render(<Menu />);
    const inputEl = screen.getByPlaceholderText("Player 1");
    expect(inputEl).toBeInTheDocument;
  });

  it("should render player 2 <Form/>", () => {
    render(<Menu />);
    const inputEl = screen.getByPlaceholderText("Player 2");
    expect(inputEl).toBeInTheDocument;
  });

  it("should render two <Button/>", () => {
    render(<Menu />);
    const buttonEl = screen.getAllByRole("button");
    expect(buttonEl).toHaveLength(2);
  });

  it("should enable PLAY button", () => {
    render(<Menu />);
    fireEvent.change(screen.getByPlaceholderText("Player 1"), {
      target: { value: "Felipe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Player 2"), {
      target: { value: "Pedro" },
    });

    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).not.toHaveClass("menu__boton--disabled");
  });

  it("should disable PLAY button", () => {
    render(<Menu />);
    fireEvent.change(screen.getByPlaceholderText("Player 1"), {
      target: { value: "Felipe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Player 2"), {
      target: { value: "" },
    });

    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).toHaveClass("menu__boton--disabled");
  });
});
