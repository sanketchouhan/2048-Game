import React from "react";

function Header({ resetGame, score, bestScore }) {
  return (
    <>
      <div className="titleDiv">
        <span className="titleLine" />
        <h2 className="title">2048</h2>
      </div>
      <div className="gameHeader">
        <div className="newGame" onClick={() => resetGame()}>
          New Game
        </div>
        <div className="scoresDiv">
          <div className="scoresDark">
            <div className="scoresTitle">Score</div>
            <div>{score}</div>
          </div>
          <div>
            <div className="scoresTitle">Best Score</div>
            <div>{bestScore === 0 ? "--" : bestScore}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
