import { useState, useEffect } from "react";
import FruitData from "./_FruitData";

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
  // the key in our data is title-cased so we have to titleCase our argument to make this function case insensitive
  fruitName = toTitleCase(fruitName);
  const [data, setData] = useState();

  // found will be the result of the find function where the name of the element is the same as fruitName
  const found = FruitData.find((e) => e.name === fruitName);

  // set data  whenever our found element changes
  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitData;
