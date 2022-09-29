# Tic-Tac-Toe

This is a 2-players Tic-Tac-Toe game made with React.


**You can play it here:** https://feralonsomaccari.github.io/tic-tac-toe/

**or you can also set it up locally**

## Description

For practical reasons and to be able to reach the deadline of this project I decided to start using `create-react-app` and to use `CSS modules` for the styles without any preprocessor, also, plain vanilla Javascript. For more complex projects `typescript` and CSS preprocessor or styled-component should be highly consider.

I followed `BEM` convention and `Mobile First Approach` for the styles.

`React-Testing-Library` has been used for the creation of the tests.

I didn't have enough time to add `prop types` but I highly recommend to use them in any project

## The Game

The Game starts with a Menu where the players can enter their names. The game won't start if the players names are empty, equal to each other or using special characters.

The game will record every match by every player and if the player has played before it will keep the score using `React Context`. Please Keep in mind that if the site is refreshed every record will be lost.

If the players have played before and Player2 (O) won the last match, it will automatically swap the marks and Player2 will be X.

There is also a Leaderboard that the user can use to see all the history of the game and who has the lead on winning games.

**Have some fun playing!**

## Local Setup

```sh
Clone it
npm i
npm run start
```