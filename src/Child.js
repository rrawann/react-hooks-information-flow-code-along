import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

export default function Child({ onChangeColor, color }) {
  const handleClick = () => {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return <div className="child" style={{ backgroundColor: "#FFF" }} />;
}

