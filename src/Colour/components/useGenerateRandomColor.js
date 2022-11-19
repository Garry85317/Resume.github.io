import { useState } from "react";

const useGenerateRandomColor = (isLocked) => {
  function colorRandom() {
    const chars = "0123456789ABCDEF";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  const num = [0, 1, 2, 3, 4, 5];

  const [colors, setColor] = useState(
    num.map((n) => ({ name: colorRandom(), id: n }))
  );

  const generateColor = () => {
    const randomColor = [];
    colors.map((n) => randomColor.push(n));

    for (let i = 0; i < 6; i++) {
      if (isLocked[i] === false) randomColor[i].name = colorRandom();
    }

    setColor(randomColor);
  };
  return { colors, generateColor };
};

export default useGenerateRandomColor;
