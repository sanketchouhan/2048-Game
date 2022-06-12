import React from "react";
import "./App.css";
import Game from "./components/Game";
import Image1 from "./assets/2.gif";
import Image2 from "./assets/4.gif";
import Image3 from "./assets/8.gif";
import Image4 from "./assets/16.gif";
import Image5 from "./assets/32.gif";
import Image6 from "./assets/64.gif";
import Image7 from "./assets/128.gif";
import Image8 from "./assets/256.gif";
import Image9 from "./assets/512.gif";
import Image10 from "./assets/1024.gif";
import Image11 from "./assets/2048.gif";
import Image12 from "./assets/game-over.gif";

const Images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

function App() {
  React.useEffect(() => {
    Images.forEach((img) => {
      const _img = new Image();
      _img.src = img;
      window[img] = _img;
    });
  }, []);

  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
