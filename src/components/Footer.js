import React from "react";
import {
  IoChevronUpOutline,
  IoChevronDownOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

function Footer({ handleKeyUp }) {
  return (
    <div className="footer">
      <div className="keys">
        <div className="iconsDiv">
          <div
            className="footerIcon"
            onClick={() => handleKeyUp({ code: "ArrowUp" })}
          >
            <IoChevronUpOutline size={24} />
          </div>
        </div>
        <div className="iconsDiv">
          <div
            className="footerIcon"
            onClick={() => handleKeyUp({ code: "ArrowLeft" })}
          >
            <IoChevronBackOutline size={24} />
          </div>
          <div
            className="footerIcon"
            onClick={() => handleKeyUp({ code: "ArrowDown" })}
          >
            <IoChevronDownOutline size={24} />
          </div>
          <div
            className="footerIcon"
            onClick={() => handleKeyUp({ code: "ArrowRight" })}
          >
            <IoChevronForwardOutline size={24} />
          </div>
        </div>
      </div>
      <div>
        Join the numbers and get the{" "}
        <span className="footerBold">2048 tile!</span>
      </div>
    </div>
  );
}

export default Footer;
