import React, { useState } from "react";
import "./RightSection.css";
import color1 from "./../../../assets/size-color-img1.png";
import color2 from "./../../../assets/size-color-img2.png";
import rightArrow from "./../../../assets/rightArrow.png";

const RightSection = () => {
  const [sizeName, setSizeName] = useState("");
  const [priceValue, setPriceValue] = useState("225");
  const [colorName, setColorName] = useState("");
  const sizeData = [
    {
        isDisabled:false,

      name: "XS",
      value: "210",
    },
    {
        isDisabled:false,

      name: "S",
      value: "215",
    },
    {
        isDisabled:true,
      name: "M",
      value: "220",
    },
    {
        isDisabled:false,

      name: "L",
      value: "225",
    },
    {
        isDisabled:false,

      name: "XXL",
      value: "230",
    },
  ];

  const handleSize = (e) => {
    setSizeName(e.target.name);
    setPriceValue(e.target.value);
  };
  const handleColor = (e) => {
    console.log(e.target.title);
    setColorName(e.target.title);
  };
  
  return (
  <div className="container-right">
    <div className="item-container">
      <div className="item-header">
        <p className="item-title">JONATHAN SIMKHAI</p>
        <p className="item-description">
          Lurex Linen Viscose Jacket In Conchigila
        </p>
        <span className="item-price">${priceValue}</span>
      </div>

      <div className="item-color-section">
        <p className="color-header">
          <b>Color</b> {colorName}
        </p>
        <img
          className="img-selection "
          src={color1}
          title="Conchigila"
          onClick={handleColor}
        />
        <img
          className="img-selection"
          src={color2}
          title="Conchi"
          onClick={handleColor}
        />
      </div>
      <div className="item-size-section">
        <div className="size-guide-section">
          <p>
            <b>Size</b> {sizeName}
          </p>
          <p className="size-guide">Size guide</p>
        </div>

        <div className="size-selection-header">
          {/* <button className="size-button">XS</button>
          <button className="size-button">S</button>
          <button className="size-button">M</button>
          <button className="size-button size-button-active">L</button>
          <button className="size-button">XXL</button> */}
          {sizeData?.map((item) => {
            return (
              <button
              className={`size-button ${
                item.isDisabled === true ? "strikethrough" : ""
              }`}
              disabled={item.isDisabled === true ? true:false}
                name={item.name}
                value={item.value}
                onClick={handleSize}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="addtobag-container">
          <button className="addtobag-button">
            ADD TO BAG
            <img
              src={rightArrow}
              alt="rightArrow"
              width="16px"
              className="addtobag-arrow"
            />
          </button>
        </div>
      </div>
      <div className="item-footer">
        <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
        <p>Speak to a Personal Stylist CHAT NOW</p>
      </div>
    </div>
    </div>
  );
};

export default RightSection;
