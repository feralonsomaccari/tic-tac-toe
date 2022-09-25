# Menu Component

This is the Board component. 

This component includes all the logic of the game board. The grid of the board is composed of 9 `<Square/>` components.

To determine the winner of the game a Magic Sqaure algorithm is used after every move.
https://en.wikipedia.org/wiki/Magic_square

## Properties

| Property       | Type                            | Default | Description            |
| :------------- | ------------------------------- | :------ | :--------------------- |
| **setPlayer1Score** | `function` | `''`    | Function that sets the score of Player 1. |
| **setPlayer2Score** | `function` | `''`    | Function that sets the score of Player 2. |
| **setTieScore** | `function` | `''`    | Function that sets the score of Ties. |
