import { useState, useEffect } from "react";
import FruitData from "./FruitData";

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const useFruitData = (fruitName) => {
  fruitName = toTitleCase(fruitName);
  const [data, setData] = useState();
  const found = FruitData.find((e) => e.name === fruitName);

  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitData;
