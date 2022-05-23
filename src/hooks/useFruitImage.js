import { useState, useEffect } from "react";
import FruitImages from "./_FruitImages";

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
  // to ensure case insensitivity
  fruitName = toTitleCase(fruitName);

  const [data, setData] = useState();

  // with key being the fruit name, the value is the url of the image
  const found = FruitImages[fruitName];

  // set data to found whenever found changes
  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitImage;
