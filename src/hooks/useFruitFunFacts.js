import { useState, useEffect } from "react";
import FruitFunFacts from "./_FruitFunFacts";

const useFruitFunFacts = (fruitName) => {
  // to ensure case insensitivity
  fruitName = fruitName.toLowerCase();

  const [data, setData] = useState(undefined);

  // with key being the fruit name, the value is an array of fruit fun facts
  const found = FruitFunFacts[fruitName];

  // set data to found whenever found changes
  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useFruitFunFacts;
