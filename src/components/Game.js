import React from "react";
import { addTile, checkGameFinished, checkGameWon, slideTiles } from "../utils";
import Board from "./Board";

var cloneDeep = require("lodash.clonedeep");

const GRID_SIZE = 4;

function Game() {
  const [board, setBoard] = React.useState(
    Array(GRID_SIZE)
      .fill(0)
      .map((x) => Array(GRID_SIZE).fill({ value: 0, newTile: false }))
  );
  const [score, setScore] = React.useState(0);
  const [gameWon, setGameWon] = React.useState(false);
  const [gamefinish, setGameFinish] = React.useState(false);

  const handleKeyUp = React.useCallback(
    (e) => {
      //   console.log(e);
      let newBoard = cloneDeep(board);
      if (e.code === "ArrowLeft") {
        let obj = slideTiles(newBoard, "left");
        setScore(score + obj.score);
        setBoard(obj.board);
        checkStatus(obj.board);
      } else if (e.code === "ArrowRight") {
        let obj = slideTiles(newBoard, "right");
        setScore(score + obj.score);
        setBoard(obj.board);
        checkStatus(obj.board);
      } else if (e.code === "ArrowUp") {
        let obj = slideTiles(newBoard, "up");
        setScore(score + obj.score);
        setBoard(obj.board);
        checkStatus(obj.board);
      } else if (e.code === "ArrowDown") {
        let obj = slideTiles(newBoard, "down");
        setScore(score + obj.score);
        setBoard(obj.board);
        checkStatus(obj.board);
      }
    },
    [board, score]
  );

  const checkStatus = (board) => {
    if (checkGameWon(board, 2048)) {
      setGameWon(true);
      return;
    }

    if (checkGameFinished(board)) {
      setGameFinish(true);
      return;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyUp);
    };
  }, [handleKeyUp]);

  const addInitialTiles = (board) => {
    let newBoard = cloneDeep(board);
    newBoard = addTile(newBoard);
    newBoard = addTile(newBoard);
    if (newBoard) setBoard(newBoard);
  };

  const resetGame = () => {
    const board = Array(GRID_SIZE)
      .fill(0)
      .map((x) => Array(GRID_SIZE).fill({ value: 0, newTile: false }));

    setBoard(board);
    setScore(0);
    setGameWon(false);
    setGameFinish(false);
    addInitialTiles(board);
  };

  let startingX, startingY, movingX, movingY;
  const touchStartEvent = (e) => {
    startingX = e.touches[0].clientX;
    startingY = e.touches[0].clientY;
  };
  const touchMoveEvent = (e) => {
    movingX = e.touches[0].clientX;
    movingY = e.touches[0].clientY;
  };
  const touchEndEvent = () => {
    if (startingX + 100 < movingX) handleKeyUp({ code: "ArrowRight" });
    else if (startingX - 100 > movingX) handleKeyUp({ code: "ArrowLeft" });
    else if (startingY + 100 < movingY) handleKeyUp({ code: "ArrowDown" });
    else if (startingY - 100 > movingY) handleKeyUp({ code: "ArrowUp" });
  };

  React.useEffect(() => {
    addInitialTiles(board);
  }, []);

  return (
    <div
      className="game"
      onTouchStart={(e) => touchStartEvent(e)}
      onTouchMove={(e) => touchMoveEvent(e)}
      onTouchEnd={(e) => touchEndEvent()}
    >
      <div className="gameHeader">
        <div className="newGame" onClick={() => resetGame()}>
          New Game
        </div>
        <div className="score">Score: {score}</div>
      </div>
      {gameWon ? (
        <img src={require(`../assets/2048.gif`)} alt="won" className="wonImg" />
      ) : gamefinish ? (
        <img
          src={require(`../assets/game-over.gif`)}
          alt="won"
          className="overImg"
        />
      ) : (
        <Board board={board} />
      )}
    </div>
  );
}

export default Game;
