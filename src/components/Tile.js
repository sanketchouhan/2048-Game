import React from "react";
import "../App.css";

function Tile({ value, newTile }) {
  return (
    <div className={`tile ${newTile && "newTile"}`}>
      {value !== 0 && (
        <img
          src={require(`../assets/${value}.gif`)}
          alt="img"
          className="tileImg"
        />
      )}
    </div>
  );
}

export default Tile;
