import { useState, useEffect } from "react";
import FruitImages from "./FruitImages";

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const useFruitImage = (fruitName) => {
  fruitName = toTitleCase(fruitName);

  const [data, setData] = useState();

  const found = FruitImages[fruitName];

  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitImage;
