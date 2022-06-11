import React from "react";
import "../App.css";
import Tile from "./Tile";

function Board({ board }) {
  return (
    <div className="board">
      {[].concat(...board).map((tile, idx) => (
        <Tile key={`${idx}`} value={tile.value} newTile={tile.newTile} />
      ))}
    </div>
  );
}

export default Board;
